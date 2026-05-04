import { shop, type Locale } from "@/lib/shop";
import { dict, tr } from "@/lib/i18n";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";

type Props = { locale: Locale };

export function ReservationContent({ locale }: Props) {
  const t = tr(locale);

  return (
    <>
      <div className="bg-gradient-to-br from-kigi-dark via-kigi to-kigi-dark text-shikkui py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.4em] text-akagawara-light mb-4">RESERVATION</p>
          <h1 className="font-serif text-4xl sm:text-6xl mb-6">{t(dict.reservation.title)}</h1>
          <p className="text-base sm:text-lg whitespace-pre-line leading-relaxed mb-12 text-shikkui/85">
            {t(dict.reservation.lead)}
          </p>

          <div className="bg-shikkui text-kigi-dark rounded-2xl p-8 sm:p-10 shadow-2xl max-w-md mx-auto">
            <p className="text-xs tracking-wider text-akagawara font-medium uppercase mb-1">
              {t(dict.access.phoneLabel)}
            </p>
            <a
              href={`tel:${shop.phone.tel}`}
              className="block font-serif text-4xl sm:text-5xl text-akagawara mb-6 hover:text-akagawara-dark transition-colors"
            >
              {shop.phone.display}
            </a>
            <PhoneButton locale={locale} variant="hero" showLabel={false} className="w-full !justify-center" />
            <p className="mt-6 text-sm text-kigi">
              {t(dict.reservation.receptionLabel)}：{t(dict.reservation.receptionHours)}
            </p>
          </div>
        </div>
      </div>

      <Section
        eyebrow={t({ ja: "FAQ", en: "FAQ" })}
        title={t(dict.reservation.faqTitle)}
        centered
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {dict.reservation.faq.map((item, i) => (
            <details
              key={i}
              className="group bg-shikkui-deep rounded-lg p-5 border border-ishi/60 hover:border-akagawara/40 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-serif text-lg text-kigi-dark">
                <span>{t(item.q)}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-akagawara text-white flex items-center justify-center text-sm group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-kigi leading-relaxed">{t(item.a)}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
