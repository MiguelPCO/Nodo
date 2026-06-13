import type { Metadata } from "next";
import { KitWaitlistPage } from "@/components/marketing/KitWaitlistPage";
import { getKit } from "@/lib/products";

export const metadata: Metadata = {
  title: "NODO Primeros Años — cápsula del primer año de tu bebé",
  description:
    "La pulsera del hospital, las primeras fotos y una carta de sus padres cada cumpleaños, selladas hasta el cierre de la cápsula. 129 €. Lista de espera abierta.",
  alternates: { canonical: "/primeros-anos" },
};

export default function PrimerosAnosPage() {
  return <KitWaitlistPage kit={getKit("primeros-anos")!} />;
}
