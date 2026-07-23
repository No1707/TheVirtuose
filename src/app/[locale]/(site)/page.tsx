import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { getSettings } from "@/lib/content";
import { getDictionary, isLocale } from "@/i18n/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", fr: "/fr" },
    },
  };
}

export default async function Home() {
  const settings = await getSettings();
  return (
    <>
      <Preloader />
      <main id="main">
        <Hero showreel={settings.showreel} />
        <Manifesto />
        <Services />
        {/* About and Contact read as one closing block: who you'd work with,
            then how to reach him. */}
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
