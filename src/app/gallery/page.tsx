import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GalleryContent } from "@/sections/GalleryContent";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "古民家の表情、季節の料理、沖縄の光。福松そばのギャラリー。",
};

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en/gallery" />
      <main className="flex-1">
        <GalleryContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
