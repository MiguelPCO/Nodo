export const site = {
  name: "NODO",
  claim: "Guarda lo que une.",
  description:
    "Cápsulas de memoria para conservar historias, voces, fotos y objetos que merecen volver. Caja física + archivo digital privado, unidos por QR.",
  url: "https://nodo.app",
  locale: "es_ES",
  email: "hola@nodo.app",
  sealCode: "NODO / 2026 / MB / A01-0042",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Memory Box", href: "/memory-box" },
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Regalos", href: "/regalos" },
  { label: "Archivo NODO", href: "/archivo" },
  { label: "Journal", href: "/journal" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Cápsulas",
    items: [
      { label: "NODO Memory Box", href: "/memory-box" },
      { label: "NODO Primeros Años", href: "/primeros-anos" },
      { label: "NODO Legado", href: "/legado" },
      { label: "NODO Promesa", href: "/promesa" },
      { label: "Regalos", href: "/regalos" },
    ],
  },
  {
    title: "NODO",
    items: [
      { label: "Cómo funciona", href: "/como-funciona" },
      { label: "Archivo NODO", href: "/archivo" },
      { label: "Journal", href: "/journal" },
      { label: "Preguntas frecuentes", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];
