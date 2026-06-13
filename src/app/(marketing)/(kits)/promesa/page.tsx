import type { Metadata } from "next";
import { KitWaitlistPage } from "@/components/marketing/KitWaitlistPage";
import { getKit } from "@/lib/products";

export const metadata: Metadata = {
  title: "NODO Promesa — cápsula del tiempo para parejas",
  description:
    "Cartas selladas, promesas y certificado de apertura a 5 o 10 años. El regalo de aniversario que se abre dos veces. 109 €. Lista de espera abierta.",
  alternates: { canonical: "/promesa" },
};

export default function PromesaPage() {
  return <KitWaitlistPage kit={getKit("promesa")!} />;
}
