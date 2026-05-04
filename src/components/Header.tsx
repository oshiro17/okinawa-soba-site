import Link from "next/link";
import { shop, type Locale } from "@/lib/shop";
import { dict, tr, pathFor } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";

type Props = {
  locale: Locale;
  /** path on the OPPOSITE locale (e.g. when on /menu, pass /en/menu) */
  altLocaleHref: string;
};

export function Header({ locale, altLocaleHref }: Props) {
  const t = tr(locale);
  const home = pathFor(locale, "/");

  const navItems = [
    { href: pathFor(locale, "/menu"), label: t(dict.nav.menu) },
    { href: pathFor(locale, "/history"), label: t(dict.nav.history) },
    { href: pathFor(locale, "/access"), label: t(dict.nav.access) },
    { href: pathFor(locale, "/gallery"), label: t(dict.nav.gallery) },
    { href: pathFor(locale, "/reservation"), label: t(dict.nav.reservation) },
  ];

  return (
    <header className="sticky top-0 z-40 bg-shikkui/90 backdrop-blur-md border-b border-ishi/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <Link href={home} className="flex items-center gap-2 group" aria-label={t(shop.name)}>
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-akagawara group-hover:scale-125 transition-transform" />
          <span className="font-serif text-xl sm:text-2xl text-kigi-dark tracking-wide">
            {t(shop.name)}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-kigi hover:text-akagawara transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-akagawara hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LangSwitch locale={locale} altHref={altLocaleHref} />
          <a
            href={`tel:${shop.phone.tel}`}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-akagawara text-white hover:bg-akagawara-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.16.39 2.4.6 3.66.6a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.21 2.5.6 3.66a1 1 0 01-.25 1.05l-2.23 2.08z" />
            </svg>
            <span className="hidden sm:inline">{t(dict.nav.callNow)}</span>
            <span className="sm:hidden">TEL</span>
          </a>
        </div>
      </div>

      <nav className="lg:hidden border-t border-ishi/60 overflow-x-auto" aria-label="mobile-primary">
        <ul className="flex gap-1 px-3 py-2 text-sm whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1.5 inline-block rounded-full text-kigi hover:bg-akagawara hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
