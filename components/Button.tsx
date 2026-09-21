import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icons";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-royal focus-visible:outline-royal",
  secondary: "bg-navy text-white hover:bg-royal focus-visible:outline-blue",
  ghost:
    "border border-mist bg-white text-navy hover:border-royal hover:text-royal",
  "outline-light":
    "border border-white/30 text-white hover:border-white hover:bg-white/10",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon = "arrowRight",
  className = "",
  ...props
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  icon?: IconName | null;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {icon ? (
        <Icon
          name={icon}
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  // Internal routes/hashes use next/link for client-side navigation.
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {inner}
    </a>
  );
}
