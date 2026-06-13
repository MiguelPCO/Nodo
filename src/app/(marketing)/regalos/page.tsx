import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DateSeal } from "@/components/ui/DateSeal";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/marketing/CTASection";
import { allKits, memoryBox } from "@/lib/products";

export const metadata: Metadata = {
  title: "Regalos emocionales — el regalo que se abre dos veces",
  description:
    "Regala una cápsula de memoria: para tu madre, tu pareja, tus abuelos o un recién nacido. Se abre al recibirla y otra vez en la fecha que la familia elija.",
  alternates: { canonical: "/regalos" },
};

const recipients = [
  {
    title: "Para tu madre",
    body: "Una Memory Box con las fotos que ella guarda en cajas — y su voz contando lo que ninguna foto dice.",
    kit: "Memory Box · disponible",
    href: "/memory-box",
    img: "/img/25.png",
  },
  {
    title: "Para tus abuelos",
    body: "NODO Legado: 80 preguntas para grabar su vida. Haz la pregunta ahora; guarda la respuesta para siempre.",
    kit: "Legado · lista de espera",
    href: "/legado",
    img: "/img/26.png",
  },
  {
    title: "Para tu pareja",
    body: "NODO Promesa: cartas selladas para abrir en cinco o diez años. El aniversario que se regala a futuro.",
    kit: "Promesa · lista de espera",
    href: "/promesa",
    img: "/img/27.png",
  },
  {
    title: "Para un recién nacido",
    body: "NODO Primeros Años: la pulsera del hospital, una carta de sus padres cada cumpleaños, entregadas al cierre.",
    kit: "Primeros Años · lista de espera",
    href: "/primeros-anos",
    img: "/img/28.png",
  },
  {
    title: "Para una boda",
    body: "Una Promesa con los votos, las cartas de los invitados y una fecha de apertura: las bodas de estaño, o las de plata.",
    kit: "Promesa · lista de espera",
    href: "/promesa",
    img: "/img/29.png",
  },
  {
    title: "Para Navidad",
    body: "La Memory Box familiar: el regalo que reúne a todos alrededor de la mesa, eligiendo qué merece volver.",
    kit: "Memory Box · disponible",
    href: "/memory-box",
    img: "/img/7.png",
  },
];

export default function RegalosPage() {
  return (
    <>
      {/* Hero */}
      <Section band="paper" className="paper-grain">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <DateSeal>Regalos</DateSeal>
              <h1 className="type-h1 mt-3 text-walnut">
                El regalo que se abre dos veces.
              </h1>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-text/85">
                Una vez al recibirlo. Otra, en la fecha que la familia programe
                al cerrar la cápsula. Sin tópicos, sin cursilería: un regalo
                emocional que además es útil.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-(--shadow-l2)">
                <Image
                  src="/img/24.png"
                  alt="Caja NODO preparada como regalo con nota manuscrita"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Ocasiones */}
      <Section band="beige">
        <Container>
          <Reveal>
            <h2 className="type-h2 text-walnut">¿Para quién es?</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipients.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <a href={r.href} className="group block h-full">
                  <ArchiveCard className="flex h-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                      <Image
                        src={r.img}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="type-h3 mt-4 text-text">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text/80">
                      {r.body}
                    </p>
                    <div className="mt-4">
                      <DateSeal>{r.kit}</DateSeal>
                    </div>
                  </ArchiveCard>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Cápsulas grid */}
      <Section band="paper">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="type-h2 text-walnut">Las cápsulas</h2>
              <DateSeal>MEMORY BOX DISPONIBLE · RESTO EN LISTA DE ESPERA</DateSeal>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allKits.map((kit, i) => (
              <Reveal key={kit.sku} delay={i * 0.06}>
                <ProductCard product={kit} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Regalo sin precio */}
      <Section band="beige">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 overflow-hidden rounded-[16px] border border-archive bg-card md:grid-cols-[1fr_2fr_auto]">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/img/6.png"
                  alt="Packaging de regalo NODO Memory Box"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="type-h3 text-text">Con nota de regalo, sin precio a la vista</h2>
                <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-text/80">
                  Escribe tu dedicatoria al hacer el pedido y la imprimimos en
                  tarjeta de archivo. El paquete va en kraft, sin plásticos y
                  sin factura dentro. Quien lo recibe activa su archivo digital
                  con el código incluido.
                </p>
              </div>
              <div className="px-6 pb-6 md:pb-0 md:pr-8">
                <Button href="/memory-box">Regalar una Memory Box</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="¿Regalo para una fecha concreta?"
        body="Apúntate y te avisamos con tiempo para que llegue antes del día señalado."
        source={memoryBox.waitlistSource}
      />
    </>
  );
}
