import Image from "next/image";
import gaikan from "../../public/images/gaikan.png";
import { dict, tr } from "@/lib/i18n";
import { type Locale } from "@/lib/shop";
import { Section } from "@/components/Section";

type Props = { locale: Locale };

export function HistoryContent({ locale }: Props) {
  const t = tr(locale);

  return (
    <>
      <div className="relative h-[55vh] min-h-[400px]">
        <Image
          src={gaikan}
          alt={t({ ja: "古民家の外観", en: "The old house exterior" })}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kigi-dark/30 to-kigi-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-shikkui">
            <p className="text-sm tracking-[0.4em] text-akagawara-light mb-3">HISTORY</p>
            <h1 className="font-serif text-4xl sm:text-6xl mb-6 drop-shadow-lg">
              {t(dict.history.title)}
            </h1>
            <p className="text-base sm:text-xl whitespace-pre-line leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              {t(dict.history.lead)}
            </p>
          </div>
        </div>
      </div>

      <Section className="!py-24">
        <div className="max-w-3xl mx-auto">
          <ol className="space-y-16">
            {dict.history.chapters.map((chapter, idx) => (
              <li key={idx} className="relative pl-8 sm:pl-14 border-l-2 border-akagawara/40">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-akagawara ring-4 ring-shikkui" aria-hidden />
                <p className="text-sm tracking-[0.2em] text-akagawara font-medium uppercase mb-2">
                  {t(chapter.year)}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-kigi-dark mb-4">
                  {t(chapter.title)}
                </h2>
                <p className="text-kigi leading-relaxed">{t(chapter.body)}</p>
              </li>
            ))}
          </ol>

          <p className="mt-20 text-center font-serif text-2xl sm:text-3xl text-akagawara italic">
            {t(dict.history.closingLine)}
          </p>
        </div>
      </Section>
    </>
  );
}
