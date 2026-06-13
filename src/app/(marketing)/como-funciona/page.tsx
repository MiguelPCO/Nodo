import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DateSeal } from "@/components/ui/DateSeal";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { RitualSteps } from "@/components/marketing/RitualSteps";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Cómo funciona una cápsula del tiempo familiar",
  description:
    "El ritual NODO en cuatro pasos: elige una cápsula, guarda lo físico, añade la voz y cierra con fecha. Caja + archivo digital privado + QR.",
  alternates: { canonical: "/como-funciona" },
};

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <Section band="paper" className="paper-grain">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <DateSeal>Cómo funciona</DateSeal>
              <h1 className="type-h1 mt-3 text-walnut">
                Un ritual, no una tarea.
              </h1>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-text/85">
                Guardar memoria familiar suele fallar por exceso: demasiadas
                fotos, demasiadas apps, demasiada culpa. NODO lo reduce a un
                ritual de cuatro pasos que cabe en una tarde — y se completa con
                los años.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-(--shadow-l2)">
                <Image
                  src="/img/17.png"
                  alt="Mesa preparada para crear una cápsula: caja, fotos, cartas, móvil y café"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Pasos */}
      <Section band="beige">
        <Container>
          <div className="mx-auto max-w-2xl">
            <RitualSteps />
          </div>
        </Container>
      </Section>

      {/* Galería de pasos */}
      <Section band="paper">
        <Container>
          <Reveal>
            <DateSeal>El ritual en imágenes</DateSeal>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { img: "/img/18.png", label: "01 · Elige tu cápsula" },
              { img: "/img/19.png", label: "02 · Guarda lo físico" },
              { img: "/img/20.png", label: "03 · Graba quien lo cuenta" },
              { img: "/img/21.png", label: "04 · Vincula el QR" },
            ].map((s, i) => (
              <Reveal key={s.img} delay={i * 0.07}>
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-[12px]">
                    <Image src={s.img} alt={s.label} fill className="object-cover" />
                  </div>
                  <p className="mt-2 text-center font-mono text-[11px] tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* QR */}
      <Section band="beige">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <DateSeal>El vínculo</DateSeal>
              <h2 className="type-h2 mt-3 text-walnut">
                Un QR que solo abre tu familia.
              </h2>
              <p className="mt-5 max-w-[56ch] leading-relaxed text-text/85">
                Cada tarjeta lleva un QR privado: un código aleatorio que no
                aparece en buscadores, hereda los permisos de tu cápsula y se
                puede desactivar cuando quieras. Al escanearlo, la persona
                invitada escucha la voz que acompaña al objeto.
              </p>
              <p className="mt-4 max-w-[56ch] leading-relaxed text-text/85">
                ¿Y si algún día no existiera NODO? El código corto va impreso
                en cada tarjeta y tu exportación incluye un índice que funciona
                sin conexión. El vínculo es tuyo, no nuestro.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-(--shadow-l2)">
                <Image src="/img/21.png" alt="Primer plano de QR privado pegado en tarjeta NODO" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Volver */}
      <Section band="paper">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <ArchiveCard hover={false} className="overflow-hidden p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/img/22.png" alt="Cápsula NODO sellada con fecha futura" fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <DateSeal>CERRADA · 2026</DateSeal>
                  </div>
                </ArchiveCard>
                <ArchiveCard hover={false} className="mt-8 overflow-hidden p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/img/23.png" alt="Tarjeta que se abre en 2036" fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <DateSeal>SE ABRE · 2036</DateSeal>
                  </div>
                </ArchiveCard>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 md:order-2">
              <DateSeal>El ritual de volver</DateSeal>
              <h2 className="type-h2 mt-3 text-walnut">
                Lo que cierras hoy, os espera mañana.
              </h2>
              <p className="mt-5 max-w-[56ch] leading-relaxed text-text/85">
                Es lo que ninguna app de fotos ofrece: una fecha. Al cerrar tu
                cápsula eliges cuándo se vuelve a abrir — un cumpleaños, un
                aniversario, una mayoría de edad. El certificado de cierre
                guarda la promesa; el archivo te avisa cuando llegue el día.
              </p>
              <p className="mt-4 max-w-[56ch] leading-relaxed text-text/85">
                Por eso decimos que es el regalo que se abre dos veces: al
                recibirlo, y cuando llega el momento.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection
        title="¿Empezamos con un recuerdo?"
        body="La Memory Box llega pronto. Apúntate y te avisamos en cuanto el primer lote esté listo."
      />
    </>
  );
}
