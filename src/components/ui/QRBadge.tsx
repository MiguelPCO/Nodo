import { DateSeal } from "./DateSeal";

// Marca visual del QR privado: patrón estilizado (no escaneable, ilustrativo)
// sobre superficie papel con su código corto en mono debajo.
export function QRBadge({
  code = "A01-0042",
  size = 96,
}: {
  code?: string;
  size?: number;
}) {
  return (
    <figure className="inline-flex flex-col items-center gap-2">
      <span
        className="grid place-items-center rounded-[16px] border border-archive bg-paper p-3"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          width={size - 28}
          height={size - 28}
          aria-hidden="true"
          className="text-ink"
        >
          <g fill="currentColor">
            <rect x="2" y="2" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="7" y="7" width="4" height="4" />
            <rect x="32" y="2" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="37" y="7" width="4" height="4" />
            <rect x="2" y="32" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="7" y="37" width="4" height="4" />
            <rect x="22" y="4" width="4" height="4" />
            <rect x="22" y="12" width="4" height="4" />
            <rect x="4" y="22" width="4" height="4" />
            <rect x="12" y="22" width="4" height="4" />
            <rect x="22" y="22" width="4" height="4" />
            <rect x="30" y="22" width="4" height="4" />
            <rect x="40" y="22" width="4" height="4" />
            <rect x="22" y="32" width="4" height="4" />
            <rect x="30" y="30" width="4" height="4" />
            <rect x="38" y="32" width="4" height="4" />
            <rect x="26" y="40" width="4" height="4" />
            <rect x="34" y="40" width="4" height="4" />
            <rect x="42" y="40" width="4" height="4" />
          </g>
        </svg>
      </span>
      <figcaption>
        <DateSeal>{code}</DateSeal>
      </figcaption>
    </figure>
  );
}
