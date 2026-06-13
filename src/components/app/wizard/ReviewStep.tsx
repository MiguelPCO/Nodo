import type { Occasion } from "@/lib/actions/capsule";
import {
  CapsuleIllustration,
  HandsIllustration,
  RootIllustration,
  BoxIllustration,
  EnvelopeIllustration,
  VoiceIllustration,
} from "@/components/illustrations";

const occasionLabel: Record<Occasion, string> = {
  bebe: "Primeros Años",
  pareja: "Pareja",
  abuelos: "Raíz",
  viaje: "Viaje",
  familia: "Familia",
  libre: "Libre",
};

const occasionIllustration: Record<Occasion, React.FC<{ className?: string }>> = {
  bebe: CapsuleIllustration,
  pareja: HandsIllustration,
  abuelos: RootIllustration,
  viaje: BoxIllustration,
  familia: EnvelopeIllustration,
  libre: VoiceIllustration,
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${parseInt(d)} de ${months[parseInt(m) - 1]} de ${y}`;
}

type ReviewStepProps = {
  occasion: Occasion;
  name: string;
  openDate: string | null;
  isPending: boolean;
};

export function ReviewStep({ occasion, name, openDate, isPending }: ReviewStepProps) {
  const Illustration = occasionIllustration[occasion];

  return (
    <div>
      <h2 className="mb-2 font-display text-3xl text-walnut">Todo listo</h2>
      <p className="mb-8 text-sm text-muted">
        Confirma los datos de tu cápsula antes de crearla.
      </p>

      <div className="rounded-[16px] border border-archive bg-card p-6 shadow-l1">
        <div className="mx-auto mb-4 w-14 text-walnut opacity-60">
          <Illustration />
        </div>

        <div className="space-y-3">
          <div>
            <p className="font-mono text-[11px] tracking-wider text-muted">TIPO</p>
            <p className="mt-0.5 text-sm text-text">{occasionLabel[occasion]}</p>
          </div>
          <div className="border-t border-archive pt-3">
            <p className="font-mono text-[11px] tracking-wider text-muted">NOMBRE</p>
            <p className="mt-0.5 font-display text-xl text-walnut">{name}</p>
          </div>
          <div className="border-t border-archive pt-3">
            <p className="font-mono text-[11px] tracking-wider text-muted">APERTURA</p>
            <p className="mt-0.5 text-sm text-text">
              {openDate ? formatDate(openDate) : "Cuando quieras"}
            </p>
          </div>
        </div>
      </div>

      {isPending && (
        <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-muted">
          CREANDO CÁPSULA…
        </p>
      )}
    </div>
  );
}
