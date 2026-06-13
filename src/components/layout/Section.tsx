import type { ComponentPropsWithoutRef } from "react";

type Band = "paper" | "beige" | "ink";

// Bandas alternantes papel / beige 30% / ink — nunca dos iguales seguidas.
const bands: Record<Band, string> = {
  paper: "bg-paper text-text",
  beige: "band-beige text-text",
  ink: "bg-ink text-card",
};

export function Section({
  band = "paper",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section"> & { band?: Band }) {
  return (
    <section
      className={`py-16 md:py-24 ${bands[band]} ${className}`}
      {...props}
    />
  );
}
