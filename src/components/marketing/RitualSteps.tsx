import { DateSeal } from "@/components/ui/DateSeal";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineDraw } from "@/components/motion/TimelineDraw";

export interface RitualStep {
  title: string;
  body: string;
}

export const defaultSteps: RitualStep[] = [
  {
    title: "Elige una cápsula",
    body: "Una caja de archivo con tarjetas guiadas, sobres de conservación y QR privados. Empieza con un solo recuerdo.",
  },
  {
    title: "Guarda lo físico",
    body: "Fotos, cartas, objetos pequeños. Cada tarjeta te pregunta lo importante: por qué esto merece volver.",
  },
  {
    title: "Añade la voz",
    body: "Graba quién lo cuenta. Vincula el audio al objeto con un QR privado: al escanearlo, solo tu familia lo escucha.",
  },
  {
    title: "Cierra con fecha",
    body: "Sella la cápsula y elige cuándo se vuelve a abrir. El ritual de volver: lo que guardas hoy, os espera mañana.",
  },
];

export function RitualSteps({ steps = defaultSteps }: { steps?: RitualStep[] }) {
  return (
    <ol className="relative flex flex-col gap-10">
      <div className="absolute bottom-2 left-[11px] top-2 hidden w-0.5 sm:block">
        <TimelineDraw />
      </div>
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-6">
          <span
            aria-hidden="true"
            className="relative z-10 mt-1 hidden size-6 shrink-0 items-center justify-center rounded-full border border-archive bg-card sm:flex"
          >
            <span className="size-2 rounded-full bg-ink" />
          </span>
          <Reveal delay={i * 0.08} className="flex-1">
            <DateSeal>Paso {String(i + 1).padStart(2, "0")}</DateSeal>
            <h3 className="type-h3 mt-1.5 text-text">{step.title}</h3>
            <p className="mt-2 max-w-[58ch] leading-relaxed text-text/80">
              {step.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
