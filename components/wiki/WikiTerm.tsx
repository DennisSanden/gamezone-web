import Link from "next/link";
import type { ReactNode } from "react";
import type { WikiDefinition } from "@/lib/wiki/wiki-definitions";
import WikiIcon from "./WikiIcon";
import styles from "./WikiTerm.module.css";

type WikiTermProps = {
    definition: WikiDefinition;
    href: string;
    children: ReactNode;
};

export default function WikiTerm({
                                     definition,
                                     href,
                                     children,
                                 }: WikiTermProps) {
    return (
        <span className={styles.wrapper}>
      <Link className={styles.term} href={href}>
        {children}
      </Link>

      <span className={styles.tooltip} role="tooltip">
        <span className={styles.tooltipHeader}>
          <span className={styles.tooltipIcon}>
            <WikiIcon name="info" size={16} />
          </span>

          <span>
            <span className={styles.category}>
              {definition.category}
            </span>

            <strong>{definition.title}</strong>
          </span>
        </span>

        <span className={styles.definition}>
          {definition.definition}
        </span>

        <span className={styles.tooltipFooter}>
          Öppna artikel
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </span>
    );
}