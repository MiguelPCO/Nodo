import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/journal";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { DateSeal } from "@/components/ui/DateSeal";
import {
  CapsuleIllustration,
  HandsIllustration,
  RootIllustration,
  VoiceIllustration,
} from "@/components/illustrations";

const illustrations = {
  voice: VoiceIllustration,
  capsule: CapsuleIllustration,
  hands: HandsIllustration,
  root: RootIllustration,
} as const;

function formatDateEs(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function JournalCard({ post }: { post: PostMeta }) {
  const Illustration = illustrations[post.illustration] ?? HandsIllustration;

  return (
    <Link href={`/journal/${post.slug}`} className="group block h-full">
      <ArchiveCard className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] bg-paper">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Illustration className="size-24 text-walnut transition-transform duration-500 group-hover:scale-[1.05]" />
            </div>
          )}
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <DateSeal>
            {formatDateEs(post.date)} · {post.readingTime}
          </DateSeal>
          <h3 className="type-h3 mt-2 text-text">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text/75">
            {post.description}
          </p>
          <span className="mt-4 text-sm font-medium text-ink underline-offset-4 group-hover:underline">
            Leer artículo
          </span>
        </div>
      </ArchiveCard>
    </Link>
  );
}
