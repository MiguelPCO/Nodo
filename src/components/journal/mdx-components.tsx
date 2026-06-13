import type { MDXComponents } from "next-mdx-remote-client/rsc";

// Estilos editoriales: lectura 720px, serif en headings, regla de archivo.
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="type-h2 mt-12 text-walnut" {...props} />
  ),
  h3: (props) => <h3 className="type-h3 mt-8 text-text" {...props} />,
  p: (props) => (
    <p className="mt-5 leading-[1.75] text-text/90" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-text/90" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 flex list-decimal flex-col gap-2 pl-5 leading-relaxed text-text/90" {...props} />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-7 border-l-2 border-terracotta pl-5 font-display text-2xl italic leading-snug text-walnut"
      {...props}
    />
  ),
  hr: () => <hr className="archive-rule mt-10 border-0 pt-1" />,
  strong: (props) => <strong className="font-semibold text-text" {...props} />,
  a: (props) => (
    <a className="font-medium text-ink underline underline-offset-2" {...props} />
  ),
};
