import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DateSeal } from "@/components/ui/DateSeal";
import { CapsuleIllustration } from "@/components/illustrations";

export default function NotFound() {
  return (
    <Section band="paper" className="paper-grain">
      <Container className="flex flex-col items-center py-16 text-center">
        <CapsuleIllustration className="size-28 text-walnut" />
        <DateSeal>ERROR 404 · SIN ARCHIVAR</DateSeal>
        <h1 className="type-h1 mt-4 text-walnut">
          Esta página no está en la cápsula.
        </h1>
        <p className="mt-4 max-w-[48ch] text-text/80">
          Quizá cambió de sitio, o quizá nunca existió. Lo importante sigue
          guardado.
        </p>
        <div className="mt-8">
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </Section>
  );
}
