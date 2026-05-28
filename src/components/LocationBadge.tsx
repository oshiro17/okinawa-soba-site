import { shop, type Locale } from "@/lib/shop";
import { tr } from "@/lib/i18n";

type Props = { locale: Locale };

export function LocationBadge({ locale }: Props) {
  const t = tr(locale);

  return (
    <div className="bg-akagawara text-shikkui py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base font-medium">
          <span className="flex items-center gap-2">
            <PinIcon />
            {t(shop.access.churaumi)}
          </span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="flex items-center gap-2">
            <PinIcon />
            {t(shop.access.junglia)}
          </span>
        </div>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-80" aria-hidden="true">
      <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </svg>
  );
}
