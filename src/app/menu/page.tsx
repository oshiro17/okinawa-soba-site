import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuContent } from "@/sections/MenuContent";

export const metadata: Metadata = {
  title: "お品書き",
  description: "三枚肉そば、ソーキそば、てびちそば、じゅーしー — 福松そばの全メニュー。",
};

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en/menu" />
      <main className="flex-1">
        <MenuContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
