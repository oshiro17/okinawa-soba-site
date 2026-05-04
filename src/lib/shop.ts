export const shop = {
  name: {
    ja: "福松そば",
    en: "Fukumatsu Soba",
  },
  tagline: {
    ja: "築百年の古民家で味わう、沖縄の原風景",
    en: "A century-old red-tiled house, serving authentic Okinawa soba",
  },
  address: {
    ja: "沖縄県本部町具志堅 1137",
    en: "1137 Gushiken, Motobu, Okinawa",
  },
  postalCode: "905-0228",
  phone: {
    display: "0980-XX-XXXX",
    tel: "+819800000000",
  },
  hours: {
    ja: "11:00 〜 16:00（L.O. 15:30）",
    en: "11:00 – 16:00 (L.O. 15:30)",
  },
  closed: {
    ja: "水曜日",
    en: "Wednesdays",
  },
  parking: {
    ja: "店舗前に8台分の無料駐車場あり",
    en: "Free parking for 8 cars in front of the shop",
  },
  access: {
    churaumi: { ja: "美ら海水族館から車で約10分", en: "10 min by car from Churaumi Aquarium" },
    junglia: { ja: "JUNGLIA から車で約15分", en: "15 min by car from JUNGLIA" },
    naha: { ja: "那覇空港から車で約100分（高速道路利用）", en: "100 min by car from Naha Airport (via expressway)" },
  },
  mapQuery: "沖縄県本部町具志堅1137",
  social: {
    instagram: "https://instagram.com/", // TODO
  },
} as const;

export type Locale = "ja" | "en";

export const t = <K extends keyof { [P in keyof typeof shop]: typeof shop[P] extends { ja: string; en: string } ? P : never }>(
  key: K,
  locale: Locale,
): string => {
  const v = shop[key] as unknown as { ja: string; en: string };
  return v[locale];
};
