import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HistoryContent } from "@/sections/HistoryContent";

export const metadata: Metadata = {
  title: "Our House",
  description: "A red-tiled house built in the late Meiji era. The story behind Fukumatsu Soba.",
  openGraph: { locale: "en_US" },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/history" />
      <main className="flex-1">
        <HistoryContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
