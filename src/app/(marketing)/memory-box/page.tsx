import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { DateSeal } from "@/components/ui/DateSeal";
import { PriceTag } from "@/components/ui/PriceTag";
import { QRBadge } from "@/components/ui/QRBadge";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { WaitlistForm } from "@/components/marketing/WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { memoryBox } from "@/lib/products";
import { productSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "NODO Memory Box — Caja de recuerdos familiar",
  description:
    "Caja premium de archivo para recuerdos físicos y digitales: 24 tarjetas guiadas, 12 sobres, 10 QR privados y certificado de cierre. 99 €.",
  alternates: { canonical: "/memory-box" },
};

const unboxingMoments = [
  { step: "01", text: "Levantas la tapa. Dentro, el mensaje: «Lo que guardes aquí, volverá».", img: "/img/10.png" },
  { step: "02", text: "Las 24 tarjetas, los sobres, el lápiz. Todo ordenado como una ficha de archivo.", img: "/img/12.png" },
  { step: "03", text: "Eliges el primer recuerdo. La tarjeta pregunta: ¿por qué esto importa?", img: "/img/5.png" },
  { step: "04", text: "Pegas el QR, grabas la voz que lo cuenta. El objeto ya tiene memoria.", img: "/img/8.png" },
];

export default function MemoryBoxPage() {
  return (
    <>
      <JsonLd data={productSchema(memoryBox)} />

      {/* Hero PDP */}
      <Section band="paper" className="paper-grain">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[6fr_5fr]">
            <div>
              <Reveal>
                <p className="type-mono-label text-sage">{memoryBox.occasion}</p>
                <h1 className="type-h1 mt-3 text-walnut">{memoryBox.name}</h1>
                <p className="mt-3 font-display text-2xl italic text-text/80">
                  {memoryBox.tagline}
                </p>
                <p className="mt-5 max-w-[58ch] leading-relaxed text-text/85">
                  {memoryBox.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <PriceTag amount={memoryBox.price} size="lg" />
                  <DateSeal>{memoryBox.sku} · ENVÍO 48–72 H · ESPAÑA</DateSeal>
                </div>
                <div className="mt-7 max-w-md">
                  <WaitlistForm source="memory-box" cta="Reservar mi caja" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[24px] shadow-(--shadow-l2)">
                <Image
                  src="/img/9.png"
                  alt="NODO Memory Box cerrada — packshot producto"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
                  <DateSeal>28 × 22 × 11 CM</DateSeal>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Qué incluye */}
      <Section band="beige">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <DateSeal>Dentro de la caja</DateSeal>
              <h2 className="type-h2 mt-3 text-walnut">
                Todo lo necesario para empezar hoy.
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {memoryBox.contents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-walnut" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Capacidad: unas 40 fotos 10×15, las tarjetas en uso y objetos
                pequeños — una libreta, una pulsera, unas llaves, un casete.
              </p>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <ArchiveCard hover={false}>
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[8px]">
                    <Image src="/img/13.png" alt="Detalle de QR impreso en tarjeta NODO" fill className="object-cover" />
                  </div>
                  <div className="flex items-start gap-4">
                    <QRBadge size={48} />
                    <div>
                      <h3 className="type-h3 text-text">10 QR privados</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text/80">
                        Cada QR conecta un objeto con su voz, su vídeo o su
                        historia. Solo tu familia puede abrirlos, y cada
                        tarjeta lleva su código impreso — legible aunque pasen
                        décadas.
                      </p>
                    </div>
                  </div>
                </ArchiveCard>
              </Reveal>
              <Reveal delay={0.18}>
                <ArchiveCard hover={false}>
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[8px]">
                    <Image src="/img/14.png" alt="Móvil reproduciendo audio familiar desde QR" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="type-h3 text-text">Archivo NODO incluido</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text/80">
                      Tu caja trae acceso gratuito al archivo digital:
                      graba audios de hasta 10 minutos, sube fotos e invita
                      a tu familia. Sin suscripción obligatoria.
                    </p>
                  </div>
                </ArchiveCard>
              </Reveal>
            </div>
          </div>

          {/* Flat lay */}
          <Reveal delay={0.15}>
            <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-[16px]">
              <Image
                src="/img/11.png"
                alt="Flat lay del contenido completo: 24 tarjetas, 12 sobres, 10 QR, separadores, lápiz y certificado"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Unboxing / ritual */}
      <Section band="paper">
        <Container>
          <Reveal>
            <DateSeal>El primer día</DateSeal>
            <h2 className="type-h2 mt-3 max-w-[24ch] text-walnut">
              Abrir una NODO se hace despacio.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-[16px]">
              <Image src="/img/15.png" alt="Caja NODO cerrándose con tarjeta encima" fill className="object-cover" />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {unboxingMoments.map((moment, i) => (
              <Reveal key={moment.step} delay={i * 0.08}>
                <div className="archive-rule pt-5">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-[10px]">
                    <Image src={moment.img} alt={`Momento ${moment.step}`} fill className="object-cover" />
                  </div>
                  <DateSeal>Momento {moment.step}</DateSeal>
                  <p className="mt-3 leading-relaxed text-text/85">{moment.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 grid items-center gap-6 rounded-[16px] border border-archive bg-card p-6 md:grid-cols-[auto_1fr_auto]">
              <div className="relative aspect-square w-16 overflow-hidden rounded-[10px]">
                <Image src="/img/16.png" alt="Packaging de regalo NODO" fill className="object-cover" />
              </div>
              <p className="text-sm leading-relaxed text-text/80">
                ¿Es un regalo? Añade una nota y la enviamos lista para abrirse
                despacio: papel kraft, sin plásticos, con el certificado de
                cierre esperando su fecha.
              </p>
              <Button href="/regalos" variant="quiet">
                Ver guía de regalo
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA final */}
      <Section band="ink">
        <Container className="text-center">
          <Reveal>
            <h2 className="type-h1 text-card">
              El regalo que se abre dos veces.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-card/80">
              Hoy, al recibirla. Y otra vez en la fecha que tu familia elija.
              Reserva tu Memory Box y te avisamos en cuanto salga el primer
              lote.
            </p>
            <div className="mt-8">
              <WaitlistForm source="memory-box" cta="Reservar mi caja" align="center" />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
