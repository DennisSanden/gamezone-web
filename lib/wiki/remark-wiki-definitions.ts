import type { WikiDefinition } from "./wiki-definitions";

type MarkdownNode = {
    type: string;
    value?: string;
    url?: string;
    children?: MarkdownNode[];
    data?: Record<string, unknown>;
};

type RemarkWikiDefinitionsOptions = {
    definitions: WikiDefinition[];
};

const skippedNodeTypes = new Set([
    "link",
    "linkReference",
    "code",
    "inlineCode",
    "heading",
    "html",
    "definition",
]);

export default function remarkWikiDefinitions(
    options: RemarkWikiDefinitionsOptions,
) {
    const definitions = createDefinitionMatchers(
        options.definitions,
    );

    return function transform(tree: MarkdownNode) {
        transformChildren(tree, definitions, false);
    };
}

function transformChildren(
    node: MarkdownNode,
    definitions: DefinitionMatcher[],
    isInsideSkippedNode: boolean,
) {
    if (!node.children || node.children.length === 0) {
        return;
    }

    const shouldSkipChildren =
        isInsideSkippedNode ||
        skippedNodeTypes.has(node.type);

    if (shouldSkipChildren) {
        return;
    }

    const transformedChildren: MarkdownNode[] = [];

    for (const child of node.children) {
        if (
            child.type === "text" &&
            typeof child.value === "string"
        ) {
            transformedChildren.push(
                ...transformTextNode(
                    child.value,
                    definitions,
                ),
            );

            continue;
        }

        transformChildren(
            child,
            definitions,
            shouldSkipChildren,
        );

        transformedChildren.push(child);
    }

    node.children = transformedChildren;
}

function transformTextNode(
    text: string,
    definitions: DefinitionMatcher[],
): MarkdownNode[] {
    if (!text.trim()) {
        return [
            {
                type: "text",
                value: text,
            },
        ];
    }

    const matches = findMatches(text, definitions);

    if (matches.length === 0) {
        return [
            {
                type: "text",
                value: text,
            },
        ];
    }

    const nodes: MarkdownNode[] = [];
    let currentIndex = 0;

    for (const match of matches) {
        if (match.start > currentIndex) {
            nodes.push({
                type: "text",
                value: text.slice(
                    currentIndex,
                    match.start,
                ),
            });
        }

        const marker = encodeURIComponent(
            match.definition.key,
        );

        const separator =
            match.definition.href.includes("?")
                ? "&"
                : "?";

        nodes.push({
            type: "link",
            url: `${match.definition.href}${separator}wikiDefinition=${marker}`,
            children: [
                {
                    type: "text",
                    value: match.displayText,
                },
            ],
        });

        currentIndex = match.end;
    }

    if (currentIndex < text.length) {
        nodes.push({
            type: "text",
            value: text.slice(currentIndex),
        });
    }

    return nodes;
}

function findMatches(
    text: string,
    definitions: DefinitionMatcher[],
): DefinitionMatch[] {
    const matches: DefinitionMatch[] = [];

    for (const definition of definitions) {
        matches.push(
            ...findAllDefinitionMatches(
                text,
                definition,
            ),
        );
    }

    matches.sort((first, second) => {
        if (first.start !== second.start) {
            return first.start - second.start;
        }

        return (
            second.end -
            second.start -
            (first.end - first.start)
        );
    });

    const acceptedMatches: DefinitionMatch[] = [];
    let occupiedUntil = -1;

    for (const match of matches) {
        if (match.start < occupiedUntil) {
            continue;
        }

        acceptedMatches.push(match);
        occupiedUntil = match.end;
    }

    return acceptedMatches;
}

function findAllDefinitionMatches(
    text: string,
    definition: DefinitionMatcher,
): DefinitionMatch[] {
    const matches: DefinitionMatch[] = [];

    for (const name of definition.names) {
        const pattern = new RegExp(
            `(^|[^\\p{L}\\p{N}])(${escapeRegExp(name)})(?=$|[^\\p{L}\\p{N}])`,
            "giu",
        );

        for (const result of text.matchAll(pattern)) {
            if (
                result.index === undefined ||
                !result[2]
            ) {
                continue;
            }

            const leadingBoundary = result[1] ?? "";
            const start =
                result.index + leadingBoundary.length;

            const displayText = result[2];
            const end = start + displayText.length;

            matches.push({
                definition,
                displayText,
                start,
                end,
            });
        }
    }

    return matches;
}

function createDefinitionMatchers(
    definitions: WikiDefinition[],
): DefinitionMatcher[] {
    return definitions
        .map((definition) => ({
            ...definition,
            names: [
                definition.title,
                definition.key,
                ...definition.aliases,
            ]
                .map((name) => name.trim())
                .filter(Boolean)
                .filter(
                    (name, index, names) =>
                        names.findIndex(
                            (candidate) =>
                                normalizeTerm(candidate) ===
                                normalizeTerm(name),
                        ) === index,
                )
                .sort(
                    (first, second) =>
                        second.length - first.length,
                ),
        }))
        .sort((first, second) => {
            const longestFirstName =
                first.names[0]?.length ?? 0;

            const longestSecondName =
                second.names[0]?.length ?? 0;

            return (
                longestSecondName -
                longestFirstName
            );
        });
}

function normalizeTerm(value: string) {
    return value
        .toLocaleLowerCase("sv-SE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function escapeRegExp(value: string) {
    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
    );
}

type DefinitionMatcher = WikiDefinition & {
    names: string[];
};

type DefinitionMatch = {
    definition: DefinitionMatcher;
    displayText: string;
    start: number;
    end: number;
};