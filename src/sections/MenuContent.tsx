import Image from "next/image";
import okinawaSoba from "../../public/images/okinawa-soba.png";
import jushi from "../../public/images/jushi.png";
import { menu, formatPrice } from "@/lib/menu";
import { dict, tr } from "@/lib/i18n";
import { type Locale } from "@/lib/shop";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";

type Props = { locale: Locale };

const imageMap: Record<string, import("next/image").StaticImageData> = {
  "/images/okinawa-soba.png": okinawaSoba,
  "/images/jushi.png": jushi,
};

export function MenuContent({ locale }: Props) {
  const t = tr(locale);

  return (
    <>
      <Section
        eyebrow={t({ ja: "Menu", en: "Menu" })}
        title={t(dict.menu.title)}
        lead={t(dict.menu.intro)}
        centered
      >
        <div className="space-y-20">
          {menu.map((category) => (
            <div key={category.id}>
              <div className="border-b-2 border-akagawara/30 pb-3 mb-8 flex items-baseline justify-between flex-wrap gap-2">
                <h2 className="font-serif text-3xl sm:text-4xl text-kigi-dark">
                  {t(category.title)}
                </h2>
                <p className="text-sm text-kigi italic">{t(category.subtitle)}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {category.items.map((item) => {
                  const img = item.image ? imageMap[item.image] : null;
                  return (
                    <article key={item.id} className="flex gap-4 group">
                      {img ? (
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={img}
                            alt={t(item.name)}
                            fill
                            sizes="128px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            placeholder="blur"
                          />
                        </div>
                      ) : (
                        <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 bg-shikkui-deep rounded-lg flex items-center justify-center text-kigi/40 text-xs">
                          {t(dict.gallery.captions.placeholder)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                          <h3 className="font-serif text-xl text-kigi-dark">{t(item.name)}</h3>
                          {item.signature && (
                            <span className="text-[10px] tracking-wider px-2 py-0.5 bg-akagawara text-white rounded-full font-medium">
                              {t(dict.menu.signatureBadge)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-kigi mb-2 leading-relaxed">
                          {t(item.description)}
                        </p>
                        <p className="font-serif text-akagawara text-lg">
                          {formatPrice(item.price, locale)}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-kigi/70 italic">
          {t(dict.menu.note)}
        </p>
      </Section>

      <div className="bg-akagawara text-shikkui py-12 px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <p className="font-serif text-2xl">
            {t({
              ja: "お席のご予約はお電話で承ります",
              en: "Please call to reserve a table",
            })}
          </p>
          <PhoneButton locale={locale} variant="hero" className="!bg-shikkui !text-akagawara hover:!bg-shikkui-deep" />
        </div>
      </div>
    </>
  );
}
