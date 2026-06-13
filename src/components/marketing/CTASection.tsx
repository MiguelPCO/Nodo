import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "./WaitlistForm";
import type { WaitlistSource } from "@/lib/products";

export function CTASection({
  title = "Empieza con un recuerdo.",
  body = "No hace falta tenerlo todo. Déjanos tu email y te avisamos cuando tu cápsula esté lista para enviarse.",
  source = "memory-box" as WaitlistSource,
}: {
  title?: string;
  body?: string;
  source?: WaitlistSource;
}) {
  return (
    <Section band="ink">
      <Container className="text-center">
        <Reveal>
          <h2 className="type-h1 text-card">{title}</h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-card/80">{body}</p>
          <div className="mt-8">
            <WaitlistForm source={source} align="center" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
