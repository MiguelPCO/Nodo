import type { Metadata } from "next";
import { KitWaitlistPage } from "@/components/marketing/KitWaitlistPage";
import { getKit } from "@/lib/products";

export const metadata: Metadata = {
  title: "NODO Legado — graba la vida de tus abuelos",
  description:
    "80 preguntas, tarjetas de recetas y QR de audio para guardar su voz contando lo que importa. 149 €. Lista de espera abierta.",
  alternates: { canonical: "/legado" },
};

export default function LegadoPage() {
  return <KitWaitlistPage kit={getKit("legado")!} />;
}
