import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { DateSeal } from "@/components/ui/DateSeal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { mdxComponents } from "@/components/journal/mdx-components";
import { getAllPosts, getPost } from "@/lib/journal";
import { articleSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

function formatDateEs(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />

      <Section band="paper" className="paper-grain">
        <Container variant="editorial">
          <DateSeal>
            Journal · {formatDateEs(post.date)} · {post.readingTime}
          </DateSeal>
          <h1 className="type-h1 mt-4 text-walnut">{post.title}</h1>
          <p className="mt-4 font-display text-2xl italic leading-snug text-text/75">
            {post.description}
          </p>

          <article className="archive-rule mt-10 pt-6">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          <div className="mt-12 flex flex-wrap items-center gap-4 rounded-[16px] border border-archive bg-card p-6">
            <p className="flex-1 text-sm leading-relaxed text-text/80">
              ¿Quieres ponerlo en práctica? La NODO Memory Box trae las
              tarjetas, los sobres y los QR para empezar hoy.
            </p>
            <Button href="/memory-box" variant="secondary">
              Ver la Memory Box
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
