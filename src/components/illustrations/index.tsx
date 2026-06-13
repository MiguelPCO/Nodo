// Ilustraciones line-art NODO: trazo 1.5px, walnut sobre transparente.
// Inline para heredar currentColor y poder animarse.

type IllustrationProps = {
  className?: string;
  title?: string;
};

function Frame({
  children,
  className = "",
  title,
  viewBox = "0 0 120 120",
}: IllustrationProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}

/** Caja de archivo abierta con tarjetas asomando */
export function BoxIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <path d="M18 52l42-16 42 16-42 16-42-16z" />
      <path d="M18 52v34l42 16V68" />
      <path d="M102 52v34l-42 16" />
      <path d="M38 44l42-15 14 8" opacity="0.5" />
      <path d="M44 38v-16l32-4v14" />
      <path d="M52 34v-13" opacity="0.6" />
      <path d="M60 32V20" opacity="0.6" />
      <circle cx="60" cy="68" r="3" />
    </Frame>
  );
}

/** Cápsula: círculo sellado con fecha y lazo */
export function CapsuleIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <circle cx="60" cy="60" r="38" />
      <circle cx="60" cy="60" r="30" opacity="0.45" />
      <path d="M60 38v10M60 72v10M38 60h10M72 60h10" opacity="0.6" />
      <path d="M48 56c4-6 20-6 24 0s-4 14-12 14-16-8-12-14z" />
      <path d="M60 70v8" />
    </Frame>
  );
}

/** Manos sosteniendo una fotografía */
export function HandsIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <rect x="38" y="30" width="44" height="54" rx="2" />
      <rect x="44" y="36" width="32" height="32" rx="1" opacity="0.5" />
      <path d="M44 76h26" opacity="0.5" />
      <path d="M30 92c0-8 4-14 8-18M90 92c0-8-4-14-8-18" />
      <path d="M24 98c2-8 6-12 12-14M96 98c-2-8-6-12-12-14" opacity="0.6" />
    </Frame>
  );
}

/** Raíz / árbol familiar */
export function RootIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <path d="M60 18v44" />
      <circle cx="60" cy="14" r="6" />
      <path d="M60 40c-12 0-18 6-20 14" />
      <circle cx="36" cy="58" r="5" />
      <path d="M60 40c12 0 18 6 20 14" />
      <circle cx="84" cy="58" r="5" />
      <path d="M60 62c-8 8-10 18-10 28M60 62c8 8 10 18 10 28M60 62v32" opacity="0.6" />
      <path d="M42 96h36" opacity="0.4" />
    </Frame>
  );
}

/** Onda de voz conectada a un QR pequeño */
export function VoiceIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <path d="M22 60v0M34 50v20M46 40v40M58 30v60M70 42v36M82 52v16M94 58v4" />
      <rect x="84" y="80" width="20" height="20" rx="3" opacity="0.7" />
      <path d="M89 85h4v4h-4zM97 85h2M89 93h2M95 91h4v4" opacity="0.7" />
    </Frame>
  );
}

/** Sobre con sello de cierre */
export function EnvelopeIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <rect x="22" y="34" width="76" height="52" rx="3" />
      <path d="M22 38l38 28 38-28" />
      <circle cx="60" cy="66" r="9" opacity="0.8" />
      <path d="M56 66l3 3 5-6" opacity="0.8" />
    </Frame>
  );
}
