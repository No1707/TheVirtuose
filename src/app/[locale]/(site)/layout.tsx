import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Cursor from "@/components/Cursor";
import Frame from "@/components/Frame";
import Nav from "@/components/Nav";
import HtmlLang from "@/components/HtmlLang";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary, isLocale, locales } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * The public site's chrome, per language. Kept out of the root layout so
 * /studio renders without the fixed nav, film grain, smooth scrolling and the
 * custom cursor — which sets `cursor: none` and would make the CMS unusable.
 */
export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <I18nProvider dict={dict} locale={locale}>
      <HtmlLang locale={locale} />
      <a href="#main" className="skip-link">
        {dict.skip}
      </a>
      <SmoothScroll>
        <Frame />
        <Nav />
        {children}
      </SmoothScroll>
      <Grain />
      <Cursor />
    </I18nProvider>
  );
}
