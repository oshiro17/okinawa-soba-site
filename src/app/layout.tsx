import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "福松そば | 沖縄・本部町の古民家沖縄そば",
    template: "%s | 福松そば",
  },
  description:
    "美ら海水族館から車で10分、JUNGLIA から15分。築百年の赤瓦古民家で味わう本格沖縄そば。沖縄県本部町具志堅の隠れた名店。",
  keywords: ["沖縄そば", "本部町", "古民家", "美ら海水族館", "JUNGLIA", "ランチ", "観光"],
  openGraph: {
    title: "福松そば | 沖縄・本部町の古民家沖縄そば",
    description: "築百年の赤瓦古民家で味わう本格沖縄そば。美ら海水族館・JUNGLIA からすぐ。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJp.variable} ${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-shikkui text-foreground">
        {children}
      </body>
    </html>
  );
}
