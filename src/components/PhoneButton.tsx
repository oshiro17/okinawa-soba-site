import { shop, type Locale } from "@/lib/shop";
import { dict, tr } from "@/lib/i18n";

type Props = {
  locale: Locale;
  variant?: "primary" | "outline" | "hero";
  showLabel?: boolean;
  className?: string;
};

export function PhoneButton({ locale, variant = "primary", showLabel = true, className = "" }: Props) {
  const t = tr(locale);
  const base = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-full";
  const sizes = {
    primary: "px-7 py-3 text-base shadow-md hover:shadow-xl",
    outline: "px-6 py-2.5 text-sm border-2",
    hero: "px-9 py-4 text-lg shadow-xl hover:shadow-2xl",
  };
  const colors = {
    primary: "bg-akagawara text-white hover:bg-akagawara-dark",
    outline: "border-akagawara text-akagawara hover:bg-akagawara hover:text-white",
    hero: "bg-akagawara text-white hover:bg-akagawara-dark hover:-translate-y-0.5",
  };

  return (
    <a
      href={`tel:${shop.phone.tel}`}
      className={`${base} ${sizes[variant]} ${colors[variant]} ${className}`}
      aria-label={t(dict.nav.callNow)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.16.39 2.4.6 3.66.6a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.21 2.5.6 3.66a1 1 0 01-.25 1.05l-2.23 2.08z" />
      </svg>
      {showLabel && (
        <span>
          {shop.phone.display}
          <span className="ml-2 text-xs opacity-90 font-normal hidden sm:inline">
            ({t(dict.nav.callNow)})
          </span>
        </span>
      )}
    </a>
  );
}
