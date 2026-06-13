export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

// Testimonios de programa piloto — sustituir por reales tras el lanzamiento.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Grabé a mi madre contando cómo conoció a mi padre. Ahora esa historia vive pegada a la foto de su boda. Mis hijos la escucharán algún día.",
    author: "Lucía M.",
    context: "Cápsula Memory Box · Valencia",
  },
  {
    quote:
      "No soy de guardar cosas. Pero esto no es guardar cosas: es dejar contado por qué importan. La diferencia se nota al abrir la caja.",
    author: "Jorge A.",
    context: "Regalo de aniversario · Bilbao",
  },
  {
    quote:
      "Lo que más me sorprendió fue la calma. Sin feed, sin likes. Solo nuestra familia y nuestras cosas, ordenadas con cariño.",
    author: "Carmen R.",
    context: "Archivo NODO · Sevilla",
  },
];
