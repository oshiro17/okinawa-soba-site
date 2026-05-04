import type { Locale } from "./shop";

export const dict = {
  nav: {
    home: { ja: "ホーム", en: "Home" },
    menu: { ja: "お品書き", en: "Menu" },
    history: { ja: "古民家の歴史", en: "Our House" },
    access: { ja: "アクセス", en: "Access" },
    gallery: { ja: "ギャラリー", en: "Gallery" },
    reservation: { ja: "ご予約", en: "Reservation" },
    callNow: { ja: "電話で予約", en: "Call to book" },
  },
  home: {
    welcome: { ja: "めんそーれ", en: "Mensōre" },
    welcomeSub: { ja: "（沖縄の言葉で「ようこそ」）", en: "(\"Welcome\" in the Okinawan language)" },
    heroCta1: { ja: "予約する", en: "Reserve a table" },
    heroCta2: { ja: "お品書きを見る", en: "See the menu" },
    locationLead: { ja: "北部観光のド真ん中。", en: "Right in the heart of northern Okinawa." },
    intro: {
      ja: "福松そばは、沖縄県本部町、緑に囲まれた赤瓦の古民家で営む沖縄そば屋です。築百年を超える木造の梁、ゆっくり流れる時間、手で打つ麺、骨から取る出汁。観光の合間に、ふと立ち止まりたくなる場所を目指しています。",
      en: "Fukumatsu Soba is an Okinawa soba restaurant set in a century-old red-tiled house in Motobu, surrounded by greenery. Wooden beams that have stood for over a hundred years, time that moves a little slower, noodles made by hand, broth taken from the bone. We hope to be a place you'll want to pause for, between sights.",
    },
    pillars: {
      tile: { title: { ja: "赤瓦の屋根", en: "Red-tiled roof" }, body: { ja: "沖縄の伝統建築。風と光と共に。", en: "Traditional Okinawan architecture, breathing with wind and light." } },
      wind: { title: { ja: "琉球の風", en: "Ryūkyū breeze" }, body: { ja: "縁側から海の香りが届きます。", en: "From the engawa veranda, the sea is on the air." } },
      hand: { title: { ja: "手仕事の味", en: "Made by hand" }, body: { ja: "出汁も麺も、毎朝この厨房で。", en: "Broth and noodles, prepared every morning in our kitchen." } },
    },
    signatureTitle: { ja: "看板のお品", en: "Signature Dishes" },
    signatureMore: { ja: "お品書きをすべて見る", en: "View the full menu" },
    accessTitle: { ja: "アクセス", en: "Access" },
    accessLead: {
      ja: "美ら海水族館・JUNGLIA から車で 10〜15 分の道のり。",
      en: "Just 10–15 minutes by car from Churaumi Aquarium and JUNGLIA.",
    },
    accessMore: { ja: "詳しい地図と行き方", en: "Map & directions" },
    reserveTitle: { ja: "ご予約はお電話で", en: "Reserve by phone" },
    reserveBody: {
      ja: "ランチタイムは大変混み合います。お電話でのご予約をおすすめいたします。",
      en: "Lunch hours are busy. We recommend booking by phone in advance.",
    },
  },
  menu: {
    title: { ja: "お品書き", en: "Menu" },
    intro: {
      ja: "毎朝、豚骨と鰹節から取る出汁が福松そばの土台です。\n季節によって、メニューや産地が変わることがあります。",
      en: "Every morning we take broth from pork bone and bonito — the foundation of our soba.\nSome dishes vary by season and ingredient availability.",
    },
    signatureBadge: { ja: "看板", en: "Signature" },
    note: {
      ja: "※ 表示価格は税込です。お子様用の取り分け食器をご用意しています。",
      en: "※ Prices include tax. Children's plates and utensils available.",
    },
  },
  history: {
    title: { ja: "古民家のものがたり", en: "The story of our house" },
    lead: {
      ja: "明治の終わり、海風と山の緑に守られて建てられた一軒の赤瓦屋根の家。\nそれが、福松そばの店舗です。",
      en: "At the end of the Meiji era, sheltered by sea winds and mountain green,\na red-tiled house was built. That house is our restaurant.",
    },
    chapters: [
      {
        year: { ja: "明治末期 (1900年代初頭)", en: "Late Meiji (early 1900s)" },
        title: { ja: "赤瓦の家、建つ", en: "The red-tiled house is built" },
        body: {
          ja: "本部町具志堅の海を見下ろす丘に、地元の宮大工によって建てられました。台風に強い低い軒、漆喰で固められた瓦。沖縄の気候に最適化された造りです。",
          en: "Built by local temple carpenters on a hill overlooking the Motobu sea. Low eaves to resist typhoons, tiles fixed with white plaster — a design tuned to the Okinawan climate.",
        },
      },
      {
        year: { ja: "戦後", en: "Post-war" },
        title: { ja: "家として、集いの場として", en: "A home, a gathering place" },
        body: {
          ja: "戦火を奇跡的に免れた数少ない建物のひとつ。地域の人々が集まり、祝い事が行われ、子どもが走り回る場所でした。",
          en: "One of the few buildings to miraculously survive the war. People gathered here, celebrations were held, children ran through its rooms.",
        },
      },
      {
        year: { ja: "現在", en: "Today" },
        title: { ja: "古民家を、そば屋に", en: "From house to soba restaurant" },
        body: {
          ja: "代々受け継がれた家を、できるだけ手を入れずに沖縄そば屋として開店しました。柱の傷も、磨かれた廊下も、そのままに。",
          en: "Passed down through generations, the house was opened as a soba restaurant with as little alteration as possible. The marks on the pillars, the polished hallway — all kept as they were.",
        },
      },
    ],
    closingLine: {
      ja: "いちゃりばちょーでー — 一度会えば、皆兄弟。",
      en: "Ichariba chōdē — Once we meet, we are family.",
    },
  },
  access: {
    title: { ja: "アクセス", en: "Access" },
    addressLabel: { ja: "ご住所", en: "Address" },
    hoursLabel: { ja: "営業時間", en: "Hours" },
    closedLabel: { ja: "定休日", en: "Closed" },
    phoneLabel: { ja: "お電話", en: "Phone" },
    parkingLabel: { ja: "駐車場", en: "Parking" },
    fromTitle: { ja: "観光地からの所要時間", en: "From major destinations" },
    routeTitle: { ja: "お越しの方法", en: "How to get here" },
    routes: {
      car: {
        title: { ja: "お車・レンタカーで", en: "By car / rental car" },
        body: {
          ja: "那覇空港から沖縄自動車道で許田 IC まで約80分、そこから一般道で約20分。",
          en: "From Naha Airport, take the Okinawa Expressway to Kyoda IC (~80 min), then ~20 min on local roads.",
        },
      },
      bus: {
        title: { ja: "路線バスで", en: "By bus" },
        body: {
          ja: "「本部町営バス・具志堅」バス停から徒歩 5 分。",
          en: "5 min walk from \"Gushiken\" stop on the Motobu town bus line.",
        },
      },
      taxi: {
        title: { ja: "タクシーで", en: "By taxi" },
        body: {
          ja: "美ら海水族館・本部港・JUNGLIA からタクシーが便利です。",
          en: "Taxis from Churaumi Aquarium, Motobu Port, or JUNGLIA are easy.",
        },
      },
    },
  },
  gallery: {
    title: { ja: "ギャラリー", en: "Gallery" },
    lead: {
      ja: "古民家の表情、季節の料理、沖縄の光。",
      en: "The faces of an old house, seasonal dishes, the light of Okinawa.",
    },
    captions: {
      gaikan: { ja: "赤瓦と漆喰、沖縄の伝統的な屋根。", en: "Red tiles bound with white plaster — a traditional Okinawan roof." },
      soba: { ja: "看板の三枚肉そば。", en: "Our signature Sanmainiku Soba." },
      jushi: { ja: "豚肉と昆布のじゅーしー。", en: "Jushi — Okinawan mixed rice with pork and kelp." },
      placeholder: { ja: "写真準備中", en: "Photo coming soon" },
    },
  },
  reservation: {
    title: { ja: "ご予約", en: "Reservation" },
    lead: {
      ja: "ランチタイムは大変混み合います。\nお電話でのご予約を承っております。",
      en: "Lunch hours fill up quickly.\nWe accept reservations by phone.",
    },
    callButton: { ja: "今すぐお電話する", en: "Call now" },
    receptionLabel: { ja: "受付時間", en: "Phone hours" },
    receptionHours: { ja: "10:30 〜 15:30（営業日のみ）", en: "10:30 – 15:30 (open days only)" },
    faqTitle: { ja: "よくあるご質問", en: "Frequently asked" },
    faq: [
      {
        q: { ja: "団体予約はできますか？", en: "Can you accommodate groups?" },
        a: {
          ja: "8名様以上は前日までにお電話でお知らせください。座敷席をご用意できる場合があります。",
          en: "For parties of 8+, please call a day ahead. Tatami room may be available.",
        },
      },
      {
        q: { ja: "個室はありますか？", en: "Are there private rooms?" },
        a: {
          ja: "完全個室はございませんが、座敷の半個室をご用意できる時間帯があります。",
          en: "No fully private rooms, but a semi-private tatami area is sometimes available.",
        },
      },
      {
        q: { ja: "子供連れでも大丈夫ですか？", en: "Are children welcome?" },
        a: {
          ja: "はい。お子様用の食器・椅子をご用意しております。座敷席でしたらお昼寝もできます。",
          en: "Yes. Children's plates and chairs are provided. Tatami seating allows for naps.",
        },
      },
      {
        q: { ja: "クレジットカードは使えますか？", en: "Do you accept credit cards?" },
        a: {
          ja: "VISA / Mastercard / JCB および PayPay がご利用いただけます。",
          en: "VISA, Mastercard, JCB and PayPay accepted.",
        },
      },
    ],
  },
  footer: {
    rights: { ja: "All rights reserved.", en: "All rights reserved." },
  },
} as const;

export const tr = (locale: Locale) =>
  function get<T>(value: { ja: T; en: T }): T {
    return value[locale];
  };

export const localeFromPath = (pathname: string): Locale =>
  pathname.startsWith("/en") ? "en" : "ja";

export const pathFor = (locale: Locale, path: string): string => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? `/en${clean === "/" ? "" : clean}` : clean;
};
