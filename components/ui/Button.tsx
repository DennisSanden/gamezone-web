import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "success"
    | "danger"
    | "link";

type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    href?: string;
    tooltip?: string;
    className?: string;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function Button({
                           children,
                           variant = "primary",
                           size = "medium",
                           icon,
                           disabled = false,
                           loading = false,
                           fullWidth = false,
                           href,
                           tooltip,
                           className,
                           onClick,
                           type = "button",
                       }: ButtonProps) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            {loading ? (
                <span className={styles.spinner} aria-hidden="true" />
            ) : (
                icon && <span className={styles.icon}>{icon}</span>
            )}
            <span>{children}</span>
        </>
    );

    if (href && !disabled && !loading) {
        return (
            <Link className={classes} href={href} title={tooltip}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            type={type}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            title={tooltip}
            onClick={onClick}
        >
            {content}
        </button>
    );
}
