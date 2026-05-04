import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeContent } from "@/sections/HomeContent";

export default function Page() {
  return (
    <>
      <Header locale="ja" altLocaleHref="/en" />
      <main className="flex-1">
        <HomeContent locale="ja" />
      </main>
      <Footer locale="ja" />
    </>
  );
}
