// Etiqueta archival en mono: fechas, códigos de cápsula, metadatos.
export function DateSeal({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "walnut" | "card";
}) {
  const tones = {
    muted: "text-muted",
    walnut: "text-walnut",
    card: "text-card/70",
  };
  return (
    <span className={`type-mono-label ${tones[tone]}`}>{children}</span>
  );
}
