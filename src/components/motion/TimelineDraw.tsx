"use client";

import { m, useReducedMotion } from "motion/react";

// Línea vertical que se dibuja al entrar en viewport (pathLength).
export function TimelineDraw({ height = 100 }: { height?: number }) {
  const reduced = useReducedMotion();

  return (
    <svg
      width="2"
      height="100%"
      viewBox={`0 0 2 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-full"
    >
      <m.line
        x1="1"
        y1="0"
        x2="1"
        y2={height}
        stroke="var(--color-archive)"
        strokeWidth="2"
        initial={reduced ? undefined : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}
