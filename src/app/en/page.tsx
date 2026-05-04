import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeContent } from "@/sections/HomeContent";

export const metadata: Metadata = {
  title: "Fukumatsu Soba | Old-house Okinawa Soba in Motobu",
  description:
    "10 min from Churaumi Aquarium, 15 min from JUNGLIA. Authentic Okinawa soba served in a century-old red-tiled house.",
  openGraph: {
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/" />
      <main className="flex-1">
        <HomeContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
