import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { DateSeal } from "@/components/ui/DateSeal";

export const metadata: Metadata = {
  title: "Términos de servicio",
  description: "Condiciones de uso de la web y la lista de espera de NODO.",
  alternates: { canonical: "/terminos" },
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <Section band="paper">
      <Container variant="editorial">
        <DateSeal>Última actualización · Junio 2026</DateSeal>
        <h1 className="type-h1 mt-3 text-walnut">Términos de servicio</h1>

        <div className="mt-8 flex flex-col gap-6 leading-relaxed text-text/85">
          <p>
            <strong>Documento orientativo pendiente de revisión legal
            profesional antes del lanzamiento comercial.</strong> Esta web
            presenta los productos NODO y permite apuntarse a la lista de
            espera; todavía no realiza ventas.
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Uso de la web</h2>
          <p>
            El contenido (textos, ilustraciones, marca NODO) es propiedad de
            sus autores. Puedes navegar y compartir enlaces; no puedes
            reutilizar la identidad de marca sin permiso.
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Lista de espera</h2>
          <p>
            Apuntarse no crea obligación de compra ni reserva de stock
            garantizada. Los precios mostrados (Memory Box 99 €, etc.) son
            precios previstos de lanzamiento y podrían ajustarse antes de la
            venta.
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Propiedad de los contenidos futuros</h2>
          <p>
            Cuando el Archivo NODO esté disponible: tus fotos, audios y textos
            seguirán siendo tuyos. NODO solo obtendrá la licencia limitada
            imprescindible para alojarlos, mostrarlos a quien tú invites y
            exportarlos cuando lo pidas.
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Ley aplicable</h2>
          <p>Legislación española. Jurisdicción: tribunales de España.</p>
        </div>
      </Container>
    </Section>
  );
}
