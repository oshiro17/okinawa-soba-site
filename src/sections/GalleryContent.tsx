import Image from "next/image";
import gaikan from "../../public/images/gaikan.png";
import okinawaSoba from "../../public/images/okinawa-soba.png";
import jushi from "../../public/images/jushi.png";
import { dict, tr } from "@/lib/i18n";
import { type Locale } from "@/lib/shop";
import { Section } from "@/components/Section";

type Props = { locale: Locale };

export function GalleryContent({ locale }: Props) {
  const t = tr(locale);

  const photos = [
    { src: gaikan, caption: t(dict.gallery.captions.gaikan), span: "sm:row-span-2 sm:col-span-2", aspect: "aspect-[4/3]" },
    { src: okinawaSoba, caption: t(dict.gallery.captions.soba), span: "", aspect: "aspect-square" },
    { src: jushi, caption: t(dict.gallery.captions.jushi), span: "", aspect: "aspect-square" },
  ];

  return (
    <Section
      eyebrow={t({ ja: "Gallery", en: "Gallery" })}
      title={t(dict.gallery.title)}
      lead={t(dict.gallery.lead)}
      centered
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
        {photos.map((photo, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-lg shadow-md group ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              placeholder="blur"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-kigi-dark/85 to-transparent text-shikkui text-xs sm:text-sm leading-snug">
              {photo.caption}
            </figcaption>
          </figure>
        ))}

        {/* プレースホルダ */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`p-${i}`}
            className="bg-shikkui-deep border-2 border-dashed border-ishi rounded-lg flex items-center justify-center text-kigi/50 text-xs sm:text-sm"
          >
            {t(dict.gallery.captions.placeholder)}
          </div>
        ))}
      </div>
    </Section>
  );
}
