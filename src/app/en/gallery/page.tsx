import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GalleryContent } from "@/sections/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description: "The faces of an old house, seasonal dishes, and the light of Okinawa.",
  openGraph: { locale: "en_US" },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/gallery" />
      <main className="flex-1">
        <GalleryContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
