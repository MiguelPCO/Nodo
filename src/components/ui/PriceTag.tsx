export function PriceTag({
  amount,
  period,
  size = "md",
}: {
  amount: string | number;
  period?: string;
  size?: "md" | "lg";
}) {
  const display = typeof amount === "number" ? `${amount} €` : amount;
  return (
    <p className="flex items-baseline gap-1.5">
      <span
        className={`font-display text-walnut ${
          size === "lg" ? "text-5xl" : "text-3xl"
        }`}
      >
        {display}
      </span>
      {period && <span className="text-sm text-muted">/ {period}</span>}
    </p>
  );
}
