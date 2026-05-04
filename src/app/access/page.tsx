import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessContent } from "@/sections/AccessContent";

export const metadata: Metadata = {
  title: "アクセス",
  description: "沖縄県本部町具志堅。美ら海水族館から10分、JUNGLIA から15分。地図と行き方。",
};

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en/access" />
      <main className="flex-1">
        <AccessContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
