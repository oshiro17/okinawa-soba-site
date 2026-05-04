import Link from "next/link";
import { shop, type Locale } from "@/lib/shop";
import { dict, tr, pathFor } from "@/lib/i18n";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const t = tr(locale);

  return (
    <footer className="mt-24 bg-kigi-dark text-shikkui/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-shikkui mb-3">{t(shop.name)}</p>
          <p className="text-sm leading-relaxed opacity-80">{t(shop.tagline)}</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="font-semibold text-shikkui mb-2">{t(dict.access.addressLabel)}</p>
          <p>〒{shop.postalCode}</p>
          <p className="mb-3">{t(shop.address)}</p>
          <p className="font-semibold text-shikkui mb-1">{t(dict.access.hoursLabel)}</p>
          <p>{t(shop.hours)}</p>
          <p className="text-xs opacity-70">
            {t(dict.access.closedLabel)}：{t(shop.closed)}
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-shikkui mb-2">{t(dict.access.phoneLabel)}</p>
          <a href={`tel:${shop.phone.tel}`} className="text-2xl font-serif text-akagawara-light hover:text-white transition-colors">
            {shop.phone.display}
          </a>
          <ul className="mt-5 space-y-1">
            <li><Link href={pathFor(locale, "/menu")} className="hover:text-akagawara-light">{t(dict.nav.menu)}</Link></li>
            <li><Link href={pathFor(locale, "/history")} className="hover:text-akagawara-light">{t(dict.nav.history)}</Link></li>
            <li><Link href={pathFor(locale, "/access")} className="hover:text-akagawara-light">{t(dict.nav.access)}</Link></li>
            <li><Link href={pathFor(locale, "/gallery")} className="hover:text-akagawara-light">{t(dict.nav.gallery)}</Link></li>
            <li><Link href={pathFor(locale, "/reservation")} className="hover:text-akagawara-light">{t(dict.nav.reservation)}</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-shikkui/15 text-xs opacity-70 text-center">
        © {new Date().getFullYear()} {t(shop.name)}. {t(dict.footer.rights)}
      </div>
    </footer>
  );
}
