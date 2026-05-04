import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessContent } from "@/sections/AccessContent";

export const metadata: Metadata = {
  title: "Access",
  description: "Gushiken, Motobu, Okinawa. 10 min from Churaumi, 15 min from JUNGLIA. Map and directions.",
  openGraph: { locale: "en_US" },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/access" />
      <main className="flex-1">
        <AccessContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
