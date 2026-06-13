import type { ComponentPropsWithoutRef } from "react";

// Ficha de archivo: borde fino, superficie carta, sombra whisper.
// Base visual de Product/Testimonial/Journal cards.
export function ArchiveCard({
  className = "",
  hover = true,
  ...props
}: ComponentPropsWithoutRef<"div"> & { hover?: boolean }) {
  return (
    <div
      className={`rounded-[16px] border border-archive bg-card p-6 shadow-(--shadow-l1) ${
        hover
          ? "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow-l2)"
          : ""
      } ${className}`}
      {...props}
    />
  );
}
