import fs from "node:fs";
import path from "node:path";

export type WikiDefinition = {
    key: string;
    title: string;
    definition: string;
    category: string;
    href: string;
    aliases: string[];
};

export type ResolvedWikiDefinition = WikiDefinition & {
    displayText: string;
};

const definitionsPath = path.join(
    process.cwd(),
    "content",
    "wiki",
    "_definitions.json",
);

export function getWikiDefinitions(): WikiDefinition[] {
    if (!fs.existsSync(definitionsPath)) {
        throw new Error(
            `Wiki-definitionerna hittades inte. Kontrollera att filen finns här: ${definitionsPath}`,
        );
    }

    const rawContent = fs.readFileSync(definitionsPath, "utf8");

    let parsedContent: unknown;

    try {
        parsedContent = JSON.parse(rawContent);
    } catch {
        throw new Error(
            "content/wiki/_definitions.json innehåller ogiltig JSON.",
        );
    }

    if (!Array.isArray(parsedContent)) {
        throw new Error(
            "content/wiki/_definitions.json måste innehålla en JSON-lista.",
        );
    }

    return parsedContent.map((value, index) => {
        if (!isDefinitionObject(value)) {
            throw new Error(
                `Definition nummer ${index + 1} i _definitions.json har fel struktur.`,
            );
        }

        return {
            key: value.key.trim(),
            title: value.title.trim(),
            definition: value.definition.trim(),
            category: value.category.trim(),
            href: value.href.trim(),
            aliases: value.aliases
                .filter((alias): alias is string => typeof alias === "string")
                .map((alias) => alias.trim())
                .filter(Boolean),
        };
    });
}

export function resolveWikiDefinition(
    term: string,
    definitions: WikiDefinition[],
): ResolvedWikiDefinition | null {
    const normalizedTerm = normalizeTerm(term);

    for (const definition of definitions) {
        const possibleNames = [
            definition.key,
            definition.title,
            ...definition.aliases,
        ];

        const matches = possibleNames.some(
            (possibleName) =>
                normalizeTerm(possibleName) === normalizedTerm,
        );

        if (matches) {
            return {
                ...definition,
                displayText: term.trim(),
            };
        }
    }

    return null;
}

export function transformWikiLinks(
    markdown: string,
    definitions: WikiDefinition[],
) {
    return markdown.replace(
        /\[\[([^[\]\r\n]+)\]\]/g,
        (completeMatch: string, rawTerm: string) => {
            const resolvedDefinition = resolveWikiDefinition(
                rawTerm,
                definitions,
            );

            if (!resolvedDefinition) {
                return completeMatch;
            }

            const definitionKey = encodeURIComponent(
                resolvedDefinition.key,
            );

            const separator = resolvedDefinition.href.includes("?")
                ? "&"
                : "?";

            return `[${resolvedDefinition.displayText}](${resolvedDefinition.href}${separator}wikiDefinition=${definitionKey})`;
        },
    );
}

function normalizeTerm(value: string) {
    return value
        .toLocaleLowerCase("sv-SE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function isDefinitionObject(
    value: unknown,
): value is {
    key: string;
    title: string;
    definition: string;
    category: string;
    href: string;
    aliases: unknown[];
} {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const candidate = value as Record<string, unknown>;

    return (
        typeof candidate.key === "string" &&
        typeof candidate.title === "string" &&
        typeof candidate.definition === "string" &&
        typeof candidate.category === "string" &&
        typeof candidate.href === "string" &&
        Array.isArray(candidate.aliases)
    );
}