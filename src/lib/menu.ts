import type { Locale } from "./shop";

export type MenuItem = {
  id: string;
  name: { ja: string; en: string };
  description: { ja: string; en: string };
  price: number;
  image?: string;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  title: { ja: string; en: string };
  subtitle: { ja: string; en: string };
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "soba",
    title: { ja: "沖縄そば", en: "Okinawa Soba" },
    subtitle: {
      ja: "豚骨と鰹の合わせ出汁、自家製平麺。",
      en: "Pork-and-bonito broth with handmade flat noodles.",
    },
    items: [
      {
        id: "sanmainiku",
        name: { ja: "三枚肉そば", en: "Sanmainiku Soba" },
        description: {
          ja: "とろける三枚肉、紅生姜、かまぼこ、ねぎ。福松そばの看板。",
          en: "Melt-in-the-mouth pork belly, pickled ginger, kamaboko and scallion. Our signature.",
        },
        price: 950,
        image: "/images/okinawa-soba.png",
        signature: true,
      },
      {
        id: "soki",
        name: { ja: "ソーキそば", en: "Soki Soba" },
        description: {
          ja: "じっくり煮込んだ骨付きソーキを贅沢にのせて。",
          en: "Slow-simmered spare ribs on the bone, served generously.",
        },
        price: 1100,
      },
      {
        id: "tebichi",
        name: { ja: "てびちそば", en: "Tebichi Soba" },
        description: {
          ja: "コラーゲンたっぷりの豚足。プルプル食感。",
          en: "Stewed pig's feet, full of collagen and silky texture.",
        },
        price: 1050,
      },
      {
        id: "nakami",
        name: { ja: "中味そば", en: "Nakami Soba" },
        description: {
          ja: "丁寧に下処理した豚もつの澄んだ味わい。",
          en: "Carefully prepared pork tripe in a clear, refined broth.",
        },
        price: 1000,
      },
    ],
  },
  {
    id: "rice",
    title: { ja: "ご飯もの", en: "Rice Dishes" },
    subtitle: {
      ja: "そばと一緒に、または締めに。",
      en: "Pair with your soba, or save for the finish.",
    },
    items: [
      {
        id: "jushi",
        name: { ja: "じゅーしー", en: "Jushi" },
        description: {
          ja: "豚肉と昆布の旨みが染みた沖縄の炊き込みご飯。",
          en: "Okinawan-style mixed rice with pork and kelp.",
        },
        price: 350,
        image: "/images/jushi.png",
        signature: true,
      },
      {
        id: "buta-don",
        name: { ja: "三枚肉丼", en: "Pork Belly Rice Bowl" },
        description: { ja: "甘辛く煮込んだ三枚肉をご飯に。", en: "Sweet-savory pork belly over rice." },
        price: 950,
      },
    ],
  },
  {
    id: "side",
    title: { ja: "サイドメニュー", en: "Sides" },
    subtitle: { ja: "海の恵みを少しずつ。", en: "A taste of the Okinawan sea." },
    items: [
      {
        id: "umibudo",
        name: { ja: "海ぶどう", en: "Sea Grapes" },
        description: { ja: "プチプチの食感、磯の香り。", en: "Pop-in-your-mouth texture with a hint of the sea." },
        price: 600,
      },
      {
        id: "mozuku",
        name: { ja: "もずく酢", en: "Mozuku Vinegar" },
        description: { ja: "本部町産のもずくをさっぱりと。", en: "Locally harvested mozuku in light vinegar." },
        price: 400,
      },
    ],
  },
  {
    id: "drink",
    title: { ja: "お飲み物", en: "Drinks" },
    subtitle: { ja: "沖縄の風と共に。", en: "Pair with the Okinawan breeze." },
    items: [
      { id: "sanpin", name: { ja: "さんぴん茶", en: "Sanpin Tea" }, description: { ja: "ジャスミン香る沖縄の定番茶。", en: "Okinawa's classic jasmine tea." }, price: 300 },
      { id: "orion", name: { ja: "オリオン生ビール", en: "Orion Draft Beer" }, description: { ja: "中ジョッキ。", en: "Medium mug." }, price: 600 },
      { id: "awamori", name: { ja: "泡盛（ロック / 水割り）", en: "Awamori (rocks / mizuwari)" }, description: { ja: "本部町の地酒も取り揃え。", en: "Including local Motobu distilleries." }, price: 500 },
    ],
  },
];

export const formatPrice = (yen: number, locale: Locale): string =>
  locale === "ja" ? `¥${yen.toLocaleString()}` : `¥${yen.toLocaleString()} (~$${(yen / 150).toFixed(0)})`;
