import Link from "next/link";
import type { Locale } from "@/lib/shop";

type Props = {
  locale: Locale;
  altHref: string;
};

export function LangSwitch({ locale, altHref }: Props) {
  const target: Locale = locale === "ja" ? "en" : "ja";
  return (
    <Link
      href={altHref}
      className="inline-flex items-center gap-1 text-sm font-medium text-kigi hover:text-akagawara transition-colors"
      aria-label={`Switch to ${target === "ja" ? "Japanese" : "English"}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
      <span>{target === "en" ? "EN" : "JA"}</span>
    </Link>
  );
}
