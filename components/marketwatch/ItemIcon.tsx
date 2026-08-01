"use client";

import { useEffect, useMemo, useState } from "react";

type ItemIconProps = {
  itemId: string;
  itemName: string;
  size?: number;
  className?: string;
};

const aliases: Record<string, string[]> = {
  raw_chicken: ["chicken"],
  dark_oak_log: ["dark_oak_log", "dark_oak_wood"],
  birch_log: ["birch_log", "birch_wood"],
  spruce_log: ["spruce_log", "spruce_wood"],
  cherry_log: ["cherry_log", "cherry_wood"],
  oak_log: ["oak_log", "oak_wood"],
  mangrove_log: ["mangrove_log", "mangrove_wood"],
};

export function ItemIcon({ itemId, itemName, size = 38, className }: ItemIconProps) {
  const cleanId = itemId.replace(/^minecraft:/, "").toLowerCase();

  const sources = useMemo(() => {
    const names = aliases[cleanId] ?? [cleanId];
    return names.flatMap(name => [
      `/minecraft/items/${name}.png`,
      `/minecraft/blocks/${name}.png`,
    ]);
  }, [cleanId]);

  const [sourceIndex, setSourceIndex] = useState(0);
  useEffect(() => setSourceIndex(0), [sources]);

  if (sourceIndex >= sources.length) {
    return (
      <span
        className={className}
        aria-label={`${itemName}, ikon saknas`}
        title={`${itemName}, ikon saknas`}
        style={{
          width: size,
          height: size,
          display: "inline-grid",
          placeItems: "center",
          flex: "0 0 auto",
          borderRadius: 9,
          background: "rgba(82, 255, 80, 0.08)",
          border: "1px solid rgba(82, 255, 80, 0.24)",
          fontSize: 10,
          fontWeight: 900,
          color: "#78ff67",
        }}
      >
        {itemName.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      className={className}
      src={sources[sourceIndex]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      onError={() => setSourceIndex(current => current + 1)}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        imageRendering: "pixelated",
        flex: "0 0 auto",
      }}
    />
  );
}
