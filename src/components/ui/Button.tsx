import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet" | "gold";

// Radius 12px y fill ink codificados aquí a propósito: DESIGN.md prohíbe
// pill buttons y cualquier otro color de relleno primario.
const base =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-sans text-base font-medium min-h-[44px] px-6 py-2.5 transition-all duration-300 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-card hover:bg-ink-deep hover:shadow-(--shadow-ink-hover)",
  secondary:
    "border-[1.5px] border-walnut text-walnut hover:bg-walnut/5",
  quiet: "text-ink underline underline-offset-4 px-2 hover:text-ink-deep",
  gold: "bg-gold text-card hover:brightness-95",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const className = `${base} ${variants[variant]}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
