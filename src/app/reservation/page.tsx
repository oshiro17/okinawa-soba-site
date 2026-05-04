import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReservationContent } from "@/sections/ReservationContent";

export const metadata: Metadata = {
  title: "ご予約",
  description: "福松そばのご予約はお電話で承ります。ランチタイムは事前のご予約がおすすめです。",
};

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en/reservation" />
      <main className="flex-1">
        <ReservationContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
