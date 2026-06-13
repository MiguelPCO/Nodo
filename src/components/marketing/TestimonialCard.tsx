import type { Testimonial } from "@/lib/testimonials";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { DateSeal } from "@/components/ui/DateSeal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <ArchiveCard hover={false} className="flex h-full flex-col justify-between gap-6">
      <blockquote className="font-display text-xl italic leading-snug text-text">
        “{testimonial.quote}”
      </blockquote>
      <footer className="flex flex-col gap-0.5">
        <p className="text-sm font-medium text-text">{testimonial.author}</p>
        <DateSeal>{testimonial.context}</DateSeal>
      </footer>
    </ArchiveCard>
  );
}
