import Image from "next/image";
import Link from "next/link";
import okinawaSoba from "../../public/images/okinawa-soba.png";
import jushi from "../../public/images/jushi.png";
import { shop, type Locale } from "@/lib/shop";
import { dict, tr, pathFor } from "@/lib/i18n";
import { Hero } from "@/components/Hero";
import { LocationBadge } from "@/components/LocationBadge";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";

type Props = { locale: Locale };

export function HomeContent({ locale }: Props) {
  const t = tr(locale);

  return (
    <>
      <Hero locale={locale} />
      <LocationBadge locale={locale} />

      {/* お店紹介 */}
      <Section
        eyebrow={t({ ja: "About", en: "About" })}
        title={t({ ja: "ようこそ、福松そばへ", en: "Welcome to Fukumatsu Soba" })}
        lead={t(dict.home.intro)}
        centered
      >
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          <Pillar title={t(dict.home.pillars.tile.title)} body={t(dict.home.pillars.tile.body)} icon="🏛️" />
          <Pillar title={t(dict.home.pillars.wind.title)} body={t(dict.home.pillars.wind.body)} icon="🌿" />
          <Pillar title={t(dict.home.pillars.hand.title)} body={t(dict.home.pillars.hand.body)} icon="🍜" />
        </div>
      </Section>

      {/* 看板メニュー */}
      <div className="bg-shikkui-deep">
        <Section
          eyebrow={t({ ja: "Signature", en: "Signature" })}
          title={t(dict.home.signatureTitle)}
          centered
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <SignatureCard
              image={okinawaSoba}
              title={t({ ja: "三枚肉そば", en: "Sanmainiku Soba" })}
              body={t({
                ja: "とろけるように柔らかい三枚肉、紅生姜、かまぼこ、ねぎ。豚骨と鰹節の合わせ出汁、自家製平麺。",
                en: "Pork belly so tender it falls apart, with pickled ginger, kamaboko and scallion. Pork-and-bonito broth, handmade flat noodles.",
              })}
              alt={t({ ja: "三枚肉そばの写真", en: "Sanmainiku Soba" })}
            />
            <SignatureCard
              image={jushi}
              title={t({ ja: "じゅーしー", en: "Jushi" })}
              body={t({
                ja: "豚肉と昆布の旨みが染み込んだ沖縄の炊き込みご飯。お味噌汁、たくあん付き。",
                en: "Okinawan mixed rice with the flavor of pork and kelp soaked through. Served with miso soup and pickles.",
              })}
              alt={t({ ja: "じゅーしーの写真", en: "Jushi" })}
            />
          </div>
          <div className="mt-12 text-center">
            <Link
              href={pathFor(locale, "/menu")}
              className="inline-block px-8 py-3 border-2 border-akagawara text-akagawara hover:bg-akagawara hover:text-white rounded-full font-semibold transition-colors"
            >
              {t(dict.home.signatureMore)} →
            </Link>
          </div>
        </Section>
      </div>

      {/* アクセス */}
      <Section
        eyebrow={t({ ja: "Access", en: "Access" })}
        title={t(dict.home.accessTitle)}
        lead={t(dict.home.accessLead)}
        centered
      >
        <div className="bg-shikkui-deep rounded-2xl p-8 sm:p-12 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-sm text-akagawara font-medium mb-1">{t(dict.access.addressLabel)}</p>
            <p className="font-serif text-xl text-kigi-dark mb-2">〒{shop.postalCode}</p>
            <p className="font-serif text-xl text-kigi-dark">{t(shop.address)}</p>
          </div>
          <div>
            <p className="text-sm text-akagawara font-medium mb-1">{t(dict.access.hoursLabel)}</p>
            <p className="font-serif text-xl text-kigi-dark mb-2">{t(shop.hours)}</p>
            <p className="text-sm text-kigi">
              {t(dict.access.closedLabel)}：{t(shop.closed)}
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href={pathFor(locale, "/access")}
            className="text-akagawara hover:text-akagawara-dark font-medium"
          >
            {t(dict.home.accessMore)} →
          </Link>
        </div>
      </Section>

      {/* 予約 CTA */}
      <div className="relative bg-kigi-dark text-shikkui py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={okinawaSoba} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-akagawara-light tracking-[0.4em] text-sm mb-3">RESERVATION</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-6">{t(dict.home.reserveTitle)}</h2>
          <p className="text-shikkui/80 mb-10 leading-relaxed">{t(dict.home.reserveBody)}</p>
          <div className="flex flex-col items-center gap-4">
            <PhoneButton locale={locale} variant="hero" />
            <p className="text-sm text-shikkui/70">
              {t(dict.reservation.receptionLabel)}：{t(dict.reservation.receptionHours)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Pillar({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3" aria-hidden>{icon}</div>
      <h3 className="font-serif text-xl text-kigi-dark mb-2">{title}</h3>
      <p className="text-sm text-kigi leading-relaxed">{body}</p>
    </div>
  );
}

function SignatureCard({
  image,
  title,
  body,
  alt,
}: {
  image: import("next/image").StaticImageData;
  title: string;
  body: string;
  alt: string;
}) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          placeholder="blur"
        />
      </div>
      <h3 className="font-serif text-2xl text-kigi-dark mt-5 mb-2">{title}</h3>
      <p className="text-kigi leading-relaxed">{body}</p>
    </div>
  );
}
