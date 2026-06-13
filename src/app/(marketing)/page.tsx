import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { RitualSteps } from "@/components/marketing/RitualSteps";
import { ProductCard } from "@/components/marketing/ProductCard";
import { PrivacyBlock } from "@/components/marketing/PrivacyBlock";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { AppPreview } from "@/components/marketing/AppPreview";
import { CTASection } from "@/components/marketing/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { DateSeal } from "@/components/ui/DateSeal";
import { QRBadge } from "@/components/ui/QRBadge";
import { allKits } from "@/lib/products";
import { testimonials } from "@/lib/testimonials";
import {
  HandsIllustration,
  VoiceIllustration,
  EnvelopeIllustration,
} from "@/components/illustrations";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Qué es una cápsula NODO */}
      <Section band="beige">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <DateSeal>Qué es</DateSeal>
              <h2 className="type-h1 mt-3 text-walnut">
                Una cápsula NODO une lo que el móvil separa.
              </h2>
              <p className="mt-5 max-w-[56ch] leading-relaxed text-text/85">
                Las fotos viven en un teléfono. Las cartas, en un cajón. Las
                historias, en la memoria de quien las cuenta. Una cápsula NODO
                lo reúne: caja de archivo para lo físico, archivo digital
                privado para voces y fotos, y QR que conectan ambos mundos.
              </p>
              <p className="mt-4 max-w-[56ch] leading-relaxed text-text/85">
                No es un álbum. No es una app de fotos. Es el lugar donde tu
                familia guarda lo que merece volver.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[16px]">
                <Image src="/img/2.png" alt="Still life universo NODO: caja, sobres, lápiz, QR y fotos" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-3 items-end gap-4">
                <div className="flex flex-col items-center gap-3 rounded-[16px] border border-archive bg-card p-5">
                  <HandsIllustration className="size-16 text-walnut" />
                  <DateSeal>LO FÍSICO</DateSeal>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-[16px] border border-archive bg-card p-5 pb-8">
                  <QRBadge size={72} />
                  <DateSeal>EL VÍNCULO</DateSeal>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-[16px] border border-archive bg-card p-5">
                  <VoiceIllustration className="size-16 text-walnut" />
                  <DateSeal>LA VOZ</DateSeal>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Cómo funciona — ritual en 4 pasos */}
      <Section band="paper">
        <Container>
          <div className="grid gap-12 md:grid-cols-[4fr_7fr]">
            <Reveal>
              <DateSeal>El ritual</DateSeal>
              <h2 className="type-h1 mt-3 text-walnut">
                Abrir. Tejer. Volver.
              </h2>
              <p className="mt-5 leading-relaxed text-text/85">
                Guardar memoria no debería ser técnico. El ritual NODO guía
                cada paso, desde el primer recuerdo hasta la fecha de apertura.
              </p>
              <div className="mt-6 overflow-hidden rounded-[12px]">
                <Image src="/img/3.png" alt="Manos guardando una foto en la caja NODO" width={480} height={320} className="w-full object-cover" />
              </div>
              <div className="mt-5">
                <Button href="/como-funciona" variant="secondary">
                  Ver el ritual completo
                </Button>
              </div>
            </Reveal>
            <RitualSteps />
          </div>
        </Container>
      </Section>

      {/* Productos */}
      <Section band="beige">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <DateSeal>Cápsulas</DateSeal>
                <h2 className="type-h1 mt-3 text-walnut">
                  Una cápsula para cada momento.
                </h2>
              </div>
              <Link
                href="/regalos"
                className="text-sm font-medium text-ink underline underline-offset-4"
              >
                Ver todas las ocasiones
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allKits.map((kit, i) => (
              <Reveal key={kit.sku} delay={i * 0.06}>
                <ProductCard product={kit} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Archivo NODO */}
      <Section band="paper">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal className="order-2 md:order-1">
              <AppPreview />
            </Reveal>
            <Reveal delay={0.1} className="order-1 md:order-2">
              <DateSeal>Archivo NODO</DateSeal>
              <h2 className="type-h1 mt-3 text-walnut">
                Tu archivo familiar. Sin feed, sin ruido.
              </h2>
              <p className="mt-5 max-w-[54ch] leading-relaxed text-text/85">
                El Archivo NODO guarda las voces, fotos y notas de tus
                cápsulas. Invitas a quien tú quieras, vinculas cada recuerdo a
                su objeto con QR y programas aperturas para fechas que
                importan.
              </p>
              <ul className="mt-5 flex flex-col gap-2 text-text/85">
                {[
                  "Graba audios de hasta 10 minutos",
                  "Privado por defecto, permisos por cápsula",
                  "Empieza gratis con tu kit",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/archivo" variant="secondary">
                  Conocer el Archivo
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Privacidad */}
      <Section band="ink">
        <Container>
          <Reveal>
            <DateSeal tone="card">Privacidad</DateSeal>
            <h2 className="type-h1 mt-3 max-w-[20ch] text-card">
              Lo íntimo no necesita exposición.
            </h2>
          </Reveal>
          <div className="mt-12">
            <PrivacyBlock />
          </div>
        </Container>
      </Section>

      {/* Historias / testimonios */}
      <Section band="paper">
        <Container>
          <Reveal>
            <DateSeal>Historias</DateSeal>
            <h2 className="type-h1 mt-3 text-walnut">
              Familias que ya guardan lo que une.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-4 rounded-[16px] border border-archive bg-card p-5">
              <EnvelopeIllustration className="size-12 shrink-0 text-walnut" />
              <p className="text-sm text-text/80">
                ¿Tienes una historia con tu cápsula? Escríbenos a{" "}
                <a href="mailto:hola@nodo.app" className="font-medium text-ink underline underline-offset-2">
                  hola@nodo.app
                </a>{" "}
                — leemos todas.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
