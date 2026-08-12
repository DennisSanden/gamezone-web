type WikiIconProps = {
    name: string;
    size?: number;
    className?: string;
};

export default function WikiIcon({
                                     name,
                                     size = 20,
                                     className,
                                 }: WikiIconProps) {
    const commonProps = {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.7,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className,
        "aria-hidden": true,
    };

    switch (name) {
        case "settlements":
            return (
                <svg {...commonProps}>
                    <path d="M3 21h18" />
                    <path d="M5 21V10l7-5 7 5v11" />
                    <path d="M9 21v-6h6v6" />
                    <path d="M8 8V4h3" />
                </svg>
            );

        case "economy":
            return (
                <svg {...commonProps}>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M15 8.5h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9" />
                    <path d="M12 6.5v2M12 16.5v2" />
                </svg>
            );

        case "production":
            return (
                <svg {...commonProps}>
                    <path d="m14.5 5.5 4 4" />
                    <path d="m12 8 4 4" />
                    <path d="M4 20l7.5-7.5" />
                    <path d="M15 4l5 5-3 3-5-5z" />
                    <path d="m4 20 3.5-.8L4.8 16.5z" />
                </svg>
            );

        case "companies":
            return (
                <svg {...commonProps}>
                    <path d="M4 21V8h10v13" />
                    <path d="M14 12h6v9" />
                    <path d="M8 12h2M8 16h2M17 16h1" />
                    <path d="M7 8V4h4v4" />
                </svg>
            );

        case "government":
            return (
                <svg {...commonProps}>
                    <path d="m4 9 4 3 4-7 4 7 4-3-2 10H6z" />
                    <path d="M6 19h12" />
                </svg>
            );

        case "world":
            return (
                <svg {...commonProps}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9" />
                    <path d="M12 3c-2.6 2.5-4 5.5-4 9s1.4 6.5 4 9" />
                </svg>
            );

        case "discord":
            return (
                <svg {...commonProps}>
                    <path d="M8 8.5a9 9 0 0 1 8 0" />
                    <path d="M7 6.5c-2 2.8-2.7 6-2 9.5 2 1.6 4 2.3 6 2.6l1-1.4" />
                    <path d="M17 6.5c2 2.8 2.7 6 2 9.5-2 1.6-4 2.3-6 2.6l-1-1.4" />
                    <circle
                        cx="9.5"
                        cy="13"
                        r=".8"
                        fill="currentColor"
                        stroke="none"
                    />
                    <circle
                        cx="14.5"
                        cy="13"
                        r=".8"
                        fill="currentColor"
                        stroke="none"
                    />
                </svg>
            );

        case "commands":
            return (
                <svg {...commonProps}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m7 10 2 2-2 2M12 15h5" />
                </svg>
            );

        case "rules":
            return (
                <svg {...commonProps}>
                    <path d="M6 3h10l2 2v16H6z" />
                    <path d="M15 3v4h4" />
                    <path d="M9 11h6M9 15h6" />
                </svg>
            );

        case "start":
            return (
                <svg {...commonProps}>
                    <path d="M5 19 19 5" />
                    <path d="M12 5h7v7" />
                    <path d="M5 8v11h11" />
                </svg>
            );

        case "experience":
            return (
                <svg {...commonProps}>
                    <path d="m12 3 2.3 4.7 5.2.8-3.8 3.7.9 5.3-4.6-2.5-4.6 2.5.9-5.3-3.8-3.7 5.2-.8z" />
                </svg>
            );

        case "marketplace":
            return (
                <svg {...commonProps}>
                    <path d="M4 9h16l-1-5H5z" />
                    <path d="M5 9v11h14V9" />
                    <path d="M9 20v-6h6v6" />
                </svg>
            );

        case "search":
            return (
                <svg {...commonProps}>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                </svg>
            );

        case "info":
            return (
                <svg {...commonProps}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5M12 8h.01" />
                </svg>
            );

        case "war":
            return (
                <svg {...commonProps}>
                    <path d="M6 4l14 14" />
                    <path d="M18 4 4 18" />
                    <path d="m4 4 4 1-3 3z" />
                    <path d="m20 4-4 1 3 3z" />
                    <path d="m5 19-1 1M19 19l1 1" />
                </svg>
            );

        case "warning":
            return (
                <svg {...commonProps}>
                    <path d="M12 3 2.8 20h18.4z" />
                    <path d="M12 9v5M12 17h.01" />
                </svg>
            );

        case "tip":
            return (
                <svg {...commonProps}>
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.8-1.5-2.5Z" />
                </svg>
            );

        case "important":
            return (
                <svg {...commonProps}>
                    <path d="M12 3 4 7v5c0 4.8 3.2 7.7 8 9 4.8-1.3 8-4.2 8-9V7z" />
                    <path d="M12 8v5M12 16h.01" />
                </svg>
            );

        default:
            return (
                <svg {...commonProps}>
                    <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
                    <path d="M8 4v16" />
                </svg>
            );
    }
}

export function getCategoryIcon(categorySlug: string) {
    const iconMap: Record<string, string> = {
        "kom-igang": "start",
        start: "start",

        regler: "rules",
        rules: "rules",

        economy: "economy",

        experience: "experience",

        production: "production",

        settlements: "settlements",

        government: "government",

        companies: "companies",

        marketplace: "marketplace",

        world: "world",
        bluemap: "world",

        discord: "discord",

        kommandon: "commands",
        commands: "commands",

        war: "war",
    };

    return iconMap[categorySlug] ?? "rules";
}