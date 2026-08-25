import type { Metadata } from "next";
import WorkIndex from "@/components/WorkIndex";
import Footer from "@/components/Footer";
import { getWorks } from "@/lib/content";
import { getDictionary, isLocale } from "@/i18n/dictionaries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: dict.meta.workTitle,
    description: dict.meta.workDescription,
    alternates: {
      canonical: `/${locale}/work`,
      languages: { en: "/en/work", fr: "/fr/work" },
    },
  };
}

export default async function WorkPage() {
  const works = await getWorks();
  return (
    <>
      <WorkIndex works={works} />
      <Footer />
    </>
  );
}
