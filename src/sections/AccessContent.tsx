import { shop, type Locale } from "@/lib/shop";
import { dict, tr } from "@/lib/i18n";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";

type Props = { locale: Locale };

export function AccessContent({ locale }: Props) {
  const t = tr(locale);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(shop.mapQuery)}&output=embed`;

  return (
    <>
      <Section
        eyebrow={t({ ja: "Access", en: "Access" })}
        title={t(dict.access.title)}
        centered
      >
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* 情報 */}
          <div className="space-y-6">
            <InfoRow label={t(dict.access.addressLabel)}>
              <p className="font-serif text-xl text-kigi-dark">〒{shop.postalCode}</p>
              <p className="font-serif text-xl text-kigi-dark">{t(shop.address)}</p>
            </InfoRow>
            <InfoRow label={t(dict.access.hoursLabel)}>
              <p className="font-serif text-xl text-kigi-dark">{t(shop.hours)}</p>
            </InfoRow>
            <InfoRow label={t(dict.access.closedLabel)}>
              <p className="font-serif text-xl text-kigi-dark">{t(shop.closed)}</p>
            </InfoRow>
            <InfoRow label={t(dict.access.phoneLabel)}>
              <PhoneButton locale={locale} variant="primary" />
            </InfoRow>
            <InfoRow label={t(dict.access.parkingLabel)}>
              <p className="text-kigi-dark">{t(shop.parking)}</p>
            </InfoRow>
          </div>

          {/* 地図 */}
          <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-shikkui">
            <iframe
              src={mapSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t({ ja: "福松そばの地図", en: "Map of Fukumatsu Soba" })}
            />
          </div>
        </div>
      </Section>

      {/* 観光地から */}
      <div className="bg-shikkui-deep">
        <Section
          eyebrow={t({ ja: "From major spots", en: "From major spots" })}
          title={t(dict.access.fromTitle)}
          centered
        >
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FromCard
              title={t({ ja: "美ら海水族館", en: "Churaumi Aquarium" })}
              detail={t({ ja: "車で約10分", en: "~10 min by car" })}
              icon="🐋"
            />
            <FromCard
              title={t({ ja: "JUNGLIA", en: "JUNGLIA" })}
              detail={t({ ja: "車で約15分", en: "~15 min by car" })}
              icon="🌴"
            />
            <FromCard
              title={t({ ja: "那覇空港", en: "Naha Airport" })}
              detail={t({ ja: "車で約100分", en: "~100 min by car" })}
              icon="✈️"
            />
          </div>
        </Section>
      </div>

      {/* 経路 */}
      <Section
        eyebrow={t({ ja: "How to get here", en: "How to get here" })}
        title={t(dict.access.routeTitle)}
        centered
      >
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <RouteCard
            title={t(dict.access.routes.car.title)}
            body={t(dict.access.routes.car.body)}
            icon="🚗"
          />
          <RouteCard
            title={t(dict.access.routes.bus.title)}
            body={t(dict.access.routes.bus.body)}
            icon="🚌"
          />
          <RouteCard
            title={t(dict.access.routes.taxi.title)}
            body={t(dict.access.routes.taxi.body)}
            icon="🚕"
          />
        </div>
      </Section>
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-akagawara/40 pl-5 py-1">
      <p className="text-xs tracking-wider text-akagawara font-medium uppercase mb-1">{label}</p>
      {children}
    </div>
  );
}

function FromCard({ title, detail, icon }: { title: string; detail: string; icon: string }) {
  return (
    <div className="bg-shikkui rounded-xl p-6 text-center shadow-sm">
      <div className="text-4xl mb-2" aria-hidden>{icon}</div>
      <p className="font-serif text-lg text-kigi-dark">{title}</p>
      <p className="text-akagawara font-semibold mt-1">{detail}</p>
    </div>
  );
}

function RouteCard({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl mb-2" aria-hidden>{icon}</div>
      <h3 className="font-serif text-xl text-kigi-dark mb-2">{title}</h3>
      <p className="text-sm text-kigi leading-relaxed">{body}</p>
    </div>
  );
}
