import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DateSeal } from "@/components/ui/DateSeal";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <div className="paper-grain relative overflow-hidden">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[7fr_5fr] md:py-28 lg:px-20">
        <div className="relative z-10">
          <Reveal>
            <DateSeal>{site.sealCode}</DateSeal>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="type-display mt-5 text-walnut">
              Guarda lo que une.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-text/85">
              Cápsulas de memoria para conservar historias, voces, fotos y
              objetos que merecen volver. Una caja para tocar. Un archivo
              privado para escuchar.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/capsule/new">Crear mi cápsula</Button>
              <Button href="/memory-box" variant="secondary">
                Descubrir la Memory Box
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 text-sm text-muted">
              Privado por diseño · Hecho en España · El regalo que se abre dos
              veces
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="relative">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-[24px] shadow-(--shadow-l2)">
              <Image
                src="/img/1.png"
                alt="Caja NODO abierta sobre mesa de madera con fotos antiguas, cartas y tarjetas"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
                <DateSeal>PARA ABRIR EN 2036</DateSeal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
