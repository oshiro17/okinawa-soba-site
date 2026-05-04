import Image from "next/image";
import Link from "next/link";
import gaikan from "../../public/images/gaikan.png";
import { shop, type Locale } from "@/lib/shop";
import { dict, tr, pathFor } from "@/lib/i18n";

type Props = { locale: Locale };

export function Hero({ locale }: Props) {
  const t = tr(locale);

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <Image
        src={gaikan}
        alt={t({ ja: "古民家の外観", en: "The old house exterior" })}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kigi-dark/80 via-kigi-dark/30 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24 text-shikkui">
        <p className="fade-up font-serif text-akagawara-light text-base sm:text-lg tracking-[0.4em] mb-3">
          {t(dict.home.welcome)}
        </p>
        <h1 className="fade-up font-serif text-5xl sm:text-7xl lg:text-8xl leading-tight mb-4 drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
          {t(shop.name)}
        </h1>
        <p className="fade-up text-lg sm:text-2xl mb-8 max-w-xl leading-relaxed drop-shadow-md" style={{ animationDelay: "0.2s" }}>
          {t(shop.tagline)}
        </p>

        <div className="fade-up flex flex-wrap gap-3 sm:gap-4" style={{ animationDelay: "0.3s" }}>
          <Link
            href={pathFor(locale, "/reservation")}
            className="px-8 py-4 bg-akagawara hover:bg-akagawara-dark text-white font-semibold rounded-full shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            {t(dict.home.heroCta1)}
          </Link>
          <Link
            href={pathFor(locale, "/menu")}
            className="px-8 py-4 bg-shikkui/15 backdrop-blur-sm border-2 border-shikkui/60 hover:bg-shikkui hover:text-kigi-dark text-shikkui font-semibold rounded-full transition-all"
          >
            {t(dict.home.heroCta2)}
          </Link>
        </div>
      </div>
    </section>
  );
}
