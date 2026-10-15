import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      className={`arrow-link ${className}`}
      href={href}
      {...(external && !href.startsWith("mailto:") ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
