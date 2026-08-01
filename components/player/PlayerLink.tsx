import Link from "next/link";
import type { ReactNode } from "react";

type PlayerLinkProps = {
  username: string;
  className?: string;
  children?: ReactNode;
};

export function PlayerLink({ username, className, children }: PlayerLinkProps) {
  return (
    <Link className={className} href={`/spelare/${encodeURIComponent(username)}`}>
      {children ?? username}
    </Link>
  );
}
