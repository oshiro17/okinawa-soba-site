import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuContent } from "@/sections/MenuContent";

export const metadata: Metadata = {
  title: "Menu",
  description: "Sanmainiku, soki, tebichi soba and jushi rice — the full Fukumatsu menu.",
  openGraph: { locale: "en_US" },
};

export default function Page() {
  return (
    <>
      <Header locale="en" altLocaleHref="/menu" />
      <main className="flex-1">
        <MenuContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
