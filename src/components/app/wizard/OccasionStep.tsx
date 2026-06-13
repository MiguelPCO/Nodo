import type { Occasion } from "@/lib/actions/capsule";
import {
  CapsuleIllustration,
  HandsIllustration,
  RootIllustration,
  BoxIllustration,
  EnvelopeIllustration,
  VoiceIllustration,
} from "@/components/illustrations";

const options: {
  value: Occasion;
  label: string;
  description: string;
  accent: string;
  accentBorder: string;
  Illustration: React.FC<{ className?: string }>;
}[] = [
  {
    value: "bebe",
    label: "Primeros Años",
    description: "Los primeros años de una nueva vida",
    accent: "text-sage",
    accentBorder: "border-sage",
    Illustration: CapsuleIllustration,
  },
  {
    value: "pareja",
    label: "Pareja",
    description: "Una historia de dos que merece guardarse",
    accent: "text-terracotta",
    accentBorder: "border-terracotta",
    Illustration: HandsIllustration,
  },
  {
    value: "abuelos",
    label: "Raíz",
    description: "La memoria de quienes vinieron antes",
    accent: "text-walnut",
    accentBorder: "border-walnut",
    Illustration: RootIllustration,
  },
  {
    value: "viaje",
    label: "Viaje",
    description: "Un lugar, un momento, una vuelta",
    accent: "text-gold",
    accentBorder: "border-gold",
    Illustration: BoxIllustration,
  },
  {
    value: "familia",
    label: "Familia",
    description: "Lo que une a todos en el mismo hilo",
    accent: "text-ink",
    accentBorder: "border-ink",
    Illustration: EnvelopeIllustration,
  },
  {
    value: "libre",
    label: "Libre",
    description: "Una cápsula sin etiqueta, solo tuya",
    accent: "text-muted",
    accentBorder: "border-archive",
    Illustration: VoiceIllustration,
  },
];

type OccasionStepProps = {
  selected: Occasion | null;
  onSelect: (occasion: Occasion) => void;
};

export function OccasionStep({ selected, onSelect }: OccasionStepProps) {
  return (
    <div>
      <h2 className="mb-2 font-display text-3xl text-walnut">
        ¿Qué quieres guardar?
      </h2>
      <p className="mb-8 text-sm text-muted">Elige una plantilla. Podrás cambiarlo más adelante.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`relative flex flex-col items-start rounded-[16px] border p-4 text-left transition-all duration-200 active:scale-[0.98] ${
                isSelected
                  ? `border-ink bg-card shadow-l2`
                  : "border-archive bg-card shadow-l1 hover:shadow-l2 hover:-translate-y-0.5"
              }`}
            >
              {isSelected && (
                <span className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full bg-ink">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}

              <div className={`mb-2 w-10 ${opt.accent}`}>
                <opt.Illustration />
              </div>

              <p
                className={`text-sm font-medium ${isSelected ? "text-ink" : "text-text"}`}
              >
                {opt.label}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted">
                {opt.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
