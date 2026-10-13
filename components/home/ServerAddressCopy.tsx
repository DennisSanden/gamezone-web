"use client";

import { useEffect, useState } from "react";
import styles from "./HomeDashboard.module.css";

const SERVER_ADDRESS = "play.gamezonemc.se";

export function ServerAddressCopy() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timeout = window.setTimeout(() => setCopyStatus("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  async function copyAddress() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SERVER_ADDRESS);
      } else {
        // Fallback for browsers that don't expose the async clipboard API.
        const input = document.createElement("textarea");
        input.value = SERVER_ADDRESS;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        try {
          if (!document.execCommand("copy")) throw new Error("Kopiering misslyckades");
        } finally {
          input.remove();
        }
      }
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
      window.prompt("Kopiera serveradressen:", SERVER_ADDRESS);
    }
  }

  return (
    <div className={styles.addressArea}>
      <span className={styles.addressLabel}>Server-IP, anslut här</span>
      <h1 className={styles.heroIpHeading}>
        <button
          type="button"
          className={styles.heroIpButton}
          onClick={copyAddress}
          title="Klicka för att kopiera serveradressen"
          aria-label={`Kopiera serveradressen ${SERVER_ADDRESS}`}
        >
          <span className={styles.serverIpPrefix}>play.</span><span className={styles.serverIpDomain}>gamezonemc.se</span>
        </button>
      </h1>
      <span className={styles.copyHint} aria-live="polite" role="status">
        {copyStatus === "copied"
          ? "IP-adressen är kopierad!"
          : copyStatus === "error"
            ? "Kopiering misslyckades. Markera adressen manuellt."
            : "Klicka på adressen för att kopiera"}
      </span>
      <button type="button" className={styles.copyButton} onClick={copyAddress}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {copyStatus === "copied"
            ? <path d="m5 12 4 4L19 6" />
            : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>}
        </svg>
        {copyStatus === "copied" ? "Kopierad!" : "Kopiera server-IP"}
      </button>
    </div>
  );
}
