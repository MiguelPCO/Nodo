export type ProductPhase = "mvp" | "v1";

export type WaitlistSource =
  | "memory-box"
  | "primeros-anos"
  | "legado"
  | "promesa"
  | "raiz"
  | "viaje"
  | "archivo"
  | "newsletter";

export interface Product {
  sku: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  phase: ProductPhase;
  occasion: string;
  tagline: string;
  description: string;
  contents: string[];
  ritual: string;
  accent: "sage" | "terracotta";
  waitlistSource: WaitlistSource;
}

export const memoryBox: Product = {
  sku: "NODO-MB",
  slug: "memory-box",
  name: "NODO Memory Box",
  shortName: "Memory Box",
  price: 99,
  phase: "mvp",
  occasion: "Recuerdos de familia",
  tagline: "Una caja para tocar. Un archivo para escuchar.",
  description:
    "Caja premium para guardar recuerdos físicos y digitales: fotos, cartas, objetos pequeños y voces, unidos por QR privados. Elige entre 5 y 12 recuerdos, escribe por qué importan y cierra la cápsula con fecha.",
  contents: [
    "Caja rígida de archivo (28 × 22 × 11 cm)",
    "24 tarjetas de memoria guiadas",
    "12 sobres de conservación",
    "10 QR privados preimpresos y numerados",
    "Separadores y lápiz",
    "Guía del ritual",
    "Certificado de cierre",
  ],
  ritual:
    "Elige los recuerdos que importan, escribe por qué, vincula una voz a cada objeto y cierra la cápsula con una fecha para volver.",
  accent: "sage",
  waitlistSource: "memory-box",
};

export const upcomingKits: Product[] = [
  {
    sku: "NODO-PA",
    slug: "primeros-anos",
    name: "NODO Primeros Años",
    shortName: "Primeros Años",
    price: 129,
    phase: "v1",
    occasion: "Nacimiento y primeros años",
    tagline: "El primer año, guardado despacio.",
    description:
      "Cápsula para los primeros años de un hijo: la pulsera del hospital, las primeras fotos, una carta de sus padres cada cumpleaños. Las cartas se entregan al cierre de la cápsula, en la fecha que la familia elija.",
    contents: [
      "Sobres por etapa",
      "Tarjetas de hitos",
      "Espacio para pulsera de hospital",
      "Cartas anuales selladas",
      "QR de audio para la voz de los padres",
    ],
    ritual:
      "Los padres escriben una carta cada cumpleaños hasta los cinco años. Se abren juntas, mucho después.",
    accent: "sage",
    waitlistSource: "primeros-anos",
  },
  {
    sku: "NODO-LE",
    slug: "legado",
    name: "NODO Legado",
    shortName: "Legado",
    price: 149,
    phase: "v1",
    occasion: "Abuelos e historia de vida",
    tagline: "Su voz, contando lo que importa.",
    description:
      "Kit para grabar la vida de los abuelos: 80 preguntas, tarjetas de recetas, guía de entrevista y QR de audio. Seis conversaciones — infancia, familia, trabajo, amor, recetas y mensajes para el futuro.",
    contents: [
      "80 preguntas de vida",
      "Tarjetas de recetas",
      "Sobres para fotos antiguas",
      "Guía de grabación",
      "Libreta y QR de audio",
    ],
    ritual:
      "Una conversación grabada cada semana. Haz la pregunta ahora; guarda la respuesta para toda la familia.",
    accent: "terracotta",
    waitlistSource: "legado",
  },
  {
    sku: "NODO-PR",
    slug: "promesa",
    name: "NODO Promesa",
    shortName: "Promesa",
    price: 109,
    phase: "v1",
    occasion: "Parejas y aniversarios",
    tagline: "Cartas para abrir en diez años.",
    description:
      "Cápsula de pareja: cartas selladas, promesas, fechas y fotos, con certificado de apertura. Se cierra junta y se abre en la fecha elegida — a cinco o diez años.",
    contents: [
      "Cartas selladas",
      "Tarjetas de promesas y fechas",
      "Sobre futuro",
      "Certificado de apertura",
      "QR privado de audio",
    ],
    ritual:
      "Cerrarla juntos y elegir la fecha. El regalo que se abre dos veces: hoy, y cuando llegue el momento.",
    accent: "terracotta",
    waitlistSource: "promesa",
  },
];

export const allKits = [memoryBox, ...upcomingKits];

export function getKit(slug: string): Product | undefined {
  return allKits.find((kit) => kit.slug === slug);
}

export interface ArchiveTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
  ceremony?: boolean;
}

export const archiveTiers: ArchiveTier[] = [
  {
    name: "Archivo NODO",
    price: "Gratis",
    features: [
      "Una cápsula digital",
      "Fotos y notas de voz",
      "QR privados de tu kit",
      "Invita a tu familia",
    ],
  },
  {
    name: "Archivo NODO Plus",
    price: "4,99 €",
    period: "mes",
    highlight: true,
    features: [
      "Cápsulas ilimitadas",
      "Más almacenamiento",
      "Apertura programada",
      "Exportar en PDF",
    ],
  },
  {
    name: "Archivo NODO Familia",
    price: "9,99 €",
    period: "mes",
    ceremony: true,
    features: [
      "Todo lo de Plus",
      "Hasta 8 miembros",
      "Archivo compartido de personas",
      "Copia de seguridad familiar",
    ],
  },
];
