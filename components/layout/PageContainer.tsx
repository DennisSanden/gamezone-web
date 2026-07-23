import type { ReactNode } from "react";
import styles from "./PageContainer.module.css";

type PageContainerProps = {
    children: ReactNode;
    className?: string;
};

export function PageContainer({
                                  children,
                                  className = "",
                              }: PageContainerProps) {
    const classes = `${styles.container} ${className}`.trim();

    return <div className={classes}>{children}</div>;
}