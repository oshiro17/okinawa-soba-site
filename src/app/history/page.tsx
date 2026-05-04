import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HistoryContent } from "@/sections/HistoryContent";

export const metadata: Metadata = {
  title: "古民家のものがたり",
  description: "明治末期に建てられた赤瓦屋根の古民家。福松そばの店舗の歴史。",
};

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en/history" />
      <main className="flex-1">
        <HistoryContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
