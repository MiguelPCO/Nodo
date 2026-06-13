import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DateSeal } from "@/components/ui/DateSeal";
import { JournalCard } from "@/components/journal/JournalCard";
import { CTASection } from "@/components/marketing/CTASection";
import { getAllPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — guías para guardar memoria familiar",
  description:
    "Preguntas para abuelos, qué guardar del primer año de tu bebé, cómo conservar fotos antiguas. Guías prácticas y sin cursilería.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section band="paper" className="paper-grain">
        <Container variant="editorial" className="text-center">
          <Reveal>
            <DateSeal>Journal</DateSeal>
            <h1 className="type-h1 mt-3 text-walnut">
              Guardar bien se aprende.
            </h1>
            <p className="mx-auto mt-5 max-w-[54ch] leading-relaxed text-text/85">
              Guías prácticas para conservar lo que importa: qué preguntar, qué
              guardar y cómo hacerlo sin que se convierta en una tarea más.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section band="beige">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <JournalCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Las guías llegan también por email."
        body="Una al mes, como mucho. Apúntate y te avisamos también del lanzamiento."
        source="newsletter"
      />
    </>
  );
}
