import Image from "next/image";
import type { Product } from "@/lib/products";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { DateSeal } from "@/components/ui/DateSeal";
import { PriceTag } from "@/components/ui/PriceTag";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "./WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { productSchema } from "@/lib/schema";

const kitImages: Record<string, { hero: string; gallery: string[] }> = {
  "primeros-anos": {
    hero: "/img/NODO Primeros Años.png",
    gallery: [
      "/img/NODO Primeros Años 2.png",
      "/img/NODO Primeros Años 3.png",
      "/img/NODO Primeros Años 4.png",
      "/img/NODO Primeros Años 5.png",
      "/img/NODO Primeros Años 6.png",
    ],
  },
  legado: {
    hero: "/img/NODO Legado.png",
    gallery: [
      "/img/NODO Legado 2.png",
      "/img/NODO Legado 3.png",
      "/img/NODO Legado 4.png",
      "/img/NODO Legado 5.png",
      "/img/NODO Legado 6.png",
    ],
  },
  promesa: {
    hero: "/img/NODO Promesa.png",
    gallery: [
      "/img/NODO Promesa 2.png",
      "/img/NODO Promesa 3.png",
      "/img/NODO Promesa 4.png",
      "/img/NODO Promesa 5.png",
      "/img/NODO Promesa 6.png",
    ],
  },
  viaje: {
    hero: "/img/NODO Viaje.png",
    gallery: [
      "/img/NODO Viaje 2.png",
      "/img/NODO Viaje 3.png",
      "/img/NODO Viaje 4.png",
      "/img/NODO Viaje 5.png",
      "/img/NODO Viaje 6.png",
    ],
  },
};

export function KitWaitlistPage({ kit }: { kit: Product }) {
  const accentText = kit.accent === "sage" ? "text-sage" : "text-terracotta";
  const images = kitImages[kit.slug];

  return (
    <>
      <JsonLd data={productSchema(kit)} />

      {/* Hero */}
      <Section band="paper" className="paper-grain">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[6fr_5fr]">
            <div>
              <Reveal>
                <p className={`type-mono-label ${accentText}`}>{kit.occasion}</p>
                <h1 className="type-h1 mt-3 text-walnut">{kit.name}</h1>
                <p className="mt-3 font-display text-2xl italic text-text/80">
                  {kit.tagline}
                </p>
                <p className="mt-5 max-w-[58ch] leading-relaxed text-text/85">
                  {kit.description}
                </p>
                <div className="mt-6 flex items-center gap-5">
                  <PriceTag amount={kit.price} size="lg" />
                  <DateSeal>{kit.sku} · DISPONIBLE PRÓXIMAMENTE</DateSeal>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              {images ? (
                <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[24px] shadow-(--shadow-l2)">
                  <Image
                    src={images.hero}
                    alt={kit.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="relative mx-auto aspect-[4/3] w-full max-w-md rounded-[24px] border border-archive bg-card shadow-(--shadow-l2)" />
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Galería */}
      {images && (
        <Section band="beige">
          <Container>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
              {images.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 0.06}>
                  <div className="relative aspect-square overflow-hidden rounded-[12px]">
                    <Image src={src} alt={`${kit.name} — imagen ${i + 2}`} fill className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Contenido + Ritual */}
      <Section band={images ? "paper" : "beige"}>
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="type-h2 text-walnut">Qué incluye</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {kit.contents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-walnut" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ArchiveCard hover={false} className="h-full">
                <DateSeal>El ritual</DateSeal>
                <p className="mt-3 font-display text-2xl italic leading-snug text-text">
                  {kit.ritual}
                </p>
              </ArchiveCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section band="ink">
        <Container className="text-center">
          <Reveal>
            <h2 className="type-h1 text-card">Te avisamos cuando esté lista.</h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-card/80">
              {kit.name} llega pronto. Déjanos tu email y serás de las primeras
              familias en recibirla — sin compromiso, sin spam.
            </p>
            <div className="mt-8">
              <WaitlistForm source={kit.waitlistSource} align="center" />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
