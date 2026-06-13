import type { ReactNode } from "react";

// Ancho 1280 para grids; "editorial" 720px para lectura larga (DESIGN.md §5).
export function Container({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "editorial";
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-20 ${
        variant === "editorial" ? "max-w-[760px]" : "max-w-[1280px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
