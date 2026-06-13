import Link from "next/link";
import type { Occasion } from "@/lib/actions/capsule";
import {
  CapsuleIllustration,
  HandsIllustration,
  RootIllustration,
  BoxIllustration,
  EnvelopeIllustration,
  VoiceIllustration,
} from "@/components/illustrations";

function formatDateShort(iso: string): string {
  const [y, m] = iso.split("-");
  return `${m}/${y}`;
}

const occasionLabel: Record<Occasion, string> = {
  bebe: "Primeros Años",
  pareja: "Pareja",
  abuelos: "Raíz",
  viaje: "Viaje",
  familia: "Familia",
  libre: "Libre",
};

const occasionAccent: Record<Occasion, string> = {
  bebe: "text-sage border-sage/40",
  pareja: "text-terracotta border-terracotta/40",
  abuelos: "text-walnut border-walnut/40",
  viaje: "text-gold border-gold/40",
  familia: "text-ink border-ink/30",
  libre: "text-muted border-archive",
};

const occasionIllustration: Record<Occasion, React.FC<{ className?: string }>> = {
  bebe: CapsuleIllustration,
  pareja: HandsIllustration,
  abuelos: RootIllustration,
  viaje: BoxIllustration,
  familia: EnvelopeIllustration,
  libre: VoiceIllustration,
};

type CapsuleCardProps = {
  id: string;
  name: string;
  occasion: Occasion;
  memoryCount?: number;
  openDate?: string | null;
  status?: "open" | "sealed";
};

export function CapsuleCard({
  id,
  name,
  occasion,
  memoryCount = 0,
  openDate,
  status = "open",
}: CapsuleCardProps) {
  const Illustration = occasionIllustration[occasion];
  const accentClass = occasionAccent[occasion];

  return (
    <Link
      href={`/capsule/${id}`}
      className="group flex flex-col rounded-[16px] border border-archive bg-card p-6 shadow-l1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-l2"
    >
      <div className="mb-4 flex items-start justify-between">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wider ${accentClass}`}
        >
          {occasionLabel[occasion]}
        </span>
        {status === "sealed" && (
          <span className="font-mono text-[10px] tracking-wider text-gold">
            SELLADA
          </span>
        )}
      </div>

      <div className="mx-auto my-2 w-16 text-walnut opacity-60 transition-opacity group-hover:opacity-80">
        <Illustration />
      </div>

      <h2 className="mt-3 font-display text-xl leading-tight text-walnut">{name}</h2>

      <div className="mt-auto flex items-end justify-between pt-4">
        <p className="font-mono text-[11px] text-muted">
          {memoryCount === 0
            ? "Sin recuerdos aún"
            : `${memoryCount} recuerdo${memoryCount !== 1 ? "s" : ""}`}
        </p>
        {openDate && (
            <span className="font-mono text-[10px] text-muted">{formatDateShort(openDate)}</span>
          )}
      </div>
    </Link>
  );
}
