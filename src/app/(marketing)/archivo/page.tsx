import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DateSeal } from "@/components/ui/DateSeal";
import { PricingTiers } from "@/components/marketing/PricingTiers";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Archivo NODO — tu app privada de fotos y voces familiares",
  description:
    "El archivo digital de tus cápsulas: fotos, audios de hasta 10 minutos, QR privados e invitaciones. Privado por defecto, sin feed. Empieza gratis.",
  alternates: { canonical: "/archivo" },
};

const features = [
  { title: "Crea tu cápsula", body: "Elige la ocasión y empieza con un solo recuerdo.", img: "/img/34.png" },
  { title: "Sube fotos", body: "Las que importan, no las 12.000 del carrete. Cada una con su historia.", img: "/img/37.png" },
  { title: "Graba voces", body: "Audios de hasta 10 minutos con guía de preguntas. La voz que cuenta.", img: "/img/36.png" },
  { title: "Vincula QR", body: "Conecta cada audio o foto al objeto físico de tu caja. Escaneas; escuchas.", img: "/img/38.png" },
  { title: "Invita a tu familia", body: "Cada persona con su permiso: ver, añadir o administrar.", img: "/img/39.png" },
  { title: "Programa aperturas", body: "Sella recuerdos con fecha. El archivo avisa cuando llegue el momento.", img: "/img/40.png" },
];

export default function ArchivoPage() {
  return (
    <>
      {/* Hero */}
      <Section band="paper" className="paper-grain">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <DateSeal>Archivo NODO</DateSeal>
              <h1 className="type-h1 mt-3 text-walnut">
                Un archivo, no una red social.
              </h1>
              <p className="mt-5 max-w-[54ch] leading-relaxed text-text/85">
                El Archivo NODO es la mitad digital de tu cápsula: el lugar
                donde viven las voces, fotos y notas de tu familia. Sin feed,
                sin likes, sin desconocidos. Solo lo vuestro, ordenado con
                calma.
              </p>
              <p className="mt-4 text-sm text-muted">
                Incluido gratis con cualquier kit · También sin caja, para
                empezar en digital
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[9/16] mx-auto w-full max-w-[260px] overflow-hidden rounded-[32px] shadow-(--shadow-l3)">
                <Image
                  src="/img/35.png"
                  alt="Pantalla del Archivo NODO — Cápsula de la abuela Ana con recuerdos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Features con imágenes */}
      <Section band="beige">
        <Container>
          <Reveal>
            <h2 className="type-h2 text-walnut">Seis cosas, bien hechas.</h2>
            <p className="mt-3 max-w-[58ch] text-text/80">
              Sin funciones infinitas. Las que hay están pensadas para un solo
              objetivo: que tu memoria familiar quede contada y vuelva.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="archive-rule pt-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                    <Image src={f.img} alt={f.title} fill className="object-cover" />
                  </div>
                  <div className="mt-3"><DateSeal>{String(i + 1).padStart(2, "0")}</DateSeal></div>
                  <h3 className="type-h3 mt-2 text-text">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/80">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Composición física + digital */}
      <Section band="paper">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
              <div>
                <DateSeal>Lo físico y lo digital</DateSeal>
                <h2 className="type-h2 mt-3 text-walnut">
                  La tarjeta y el audio, uno junto al otro.
                </h2>
                <p className="mt-5 max-w-[52ch] leading-relaxed text-text/85">
                  Escaneas el QR de una tarjeta física y escuchas la voz que
                  grabaste. El objeto y su memoria viajan juntos — uno en la
                  caja, otro en el archivo.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-(--shadow-l2)">
                <Image
                  src="/img/41.png"
                  alt="Composición física y digital: tarjeta QR al lado del móvil con audio abierto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Planes */}
      <Section band="beige">
        <Container>
          <Reveal>
            <div className="text-center">
              <DateSeal>Planes</DateSeal>
              <h2 className="type-h1 mt-3 text-walnut">Empieza gratis. Crece si quieres.</h2>
            </div>
          </Reveal>
          <div className="mt-12">
            <PricingTiers />
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-muted">
              Siempre podrás exportar todo — fotos, audios y el índice de tus
              QR. Tus recuerdos no son rehenes de ninguna suscripción.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="El archivo abre con la primera caja."
        body="Apúntate y sé de las primeras familias en estrenar el Archivo NODO."
        source="archivo"
      />
    </>
  );
}
