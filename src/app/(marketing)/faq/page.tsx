import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DateSeal } from "@/components/ui/DateSeal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Qué es una cápsula NODO, cómo funcionan los QR privados, quién ve tus recuerdos y qué pasa con ellos si NODO cierra.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Section band="paper" className="paper-grain">
        <Container variant="editorial">
          <Reveal>
            <DateSeal>Preguntas frecuentes</DateSeal>
            <h1 className="type-h1 mt-3 text-walnut">
              Las dudas razonables.
            </h1>
            <p className="mt-4 max-w-[56ch] leading-relaxed text-text/85">
              Confiar tu memoria familiar a una marca nueva merece respuestas
              claras. Aquí están — y si falta alguna, escríbenos a{" "}
              <a href="mailto:hola@nodo.app" className="font-medium text-ink underline underline-offset-2">
                hola@nodo.app
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
