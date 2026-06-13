import { DateSeal } from "@/components/ui/DateSeal";

// Mock de la pantalla del Archivo NODO en marco de dispositivo CSS.
export function AppPreview() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[32px] border border-archive bg-card p-2.5 shadow-(--shadow-l3)">
        <div className="rounded-[24px] bg-paper p-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-base tracking-[0.14em] text-ink">
              NODO
            </span>
            <span className="size-7 rounded-full border border-archive bg-card" />
          </div>

          <p className="mt-4 font-display text-lg text-walnut">
            Cápsula de la abuela Ana
          </p>
          <DateSeal>12 recuerdos · privada</DateSeal>

          <div className="mt-4 flex flex-col gap-2.5">
            {[
              { label: "La receta del cocido", meta: "AUDIO · 04:12" },
              { label: "Boda de 1962", meta: "FOTO · QR A01-0042" },
              { label: "Carta para 2036", meta: "SELLADA" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[12px] border border-archive bg-card p-3"
              >
                <p className="text-sm font-medium text-text">{item.label}</p>
                <p className="type-mono-label mt-1 text-muted">{item.meta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid place-items-center rounded-[12px] bg-ink py-2.5">
            <span className="text-sm font-medium text-card">
              Añadir recuerdo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
