import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReservationContent } from "@/sections/ReservationContent";

export const metadata: Metadata = {
  title: "Reservation",
  description: "Reserve a table at Fukumatsu Soba by phone. We recommend booking ahead during lunch hours.",
  openGraph: { locale: "en_US" },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/reservation" />
      <main className="flex-1">
        <ReservationContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
