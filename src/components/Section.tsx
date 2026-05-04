import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
};

export function Section({ eyebrow, title, lead, children, className = "", centered = false }: Props) {
  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title || lead) && (
          <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}>
            {eyebrow && (
              <p className="text-sm tracking-[0.3em] text-akagawara uppercase mb-3 font-medium">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-kigi-dark leading-tight mb-4">
                {title}
              </h2>
            )}
            {lead && (
              <p className="text-base sm:text-lg text-kigi-dark/75 leading-relaxed whitespace-pre-line">
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
