"use client";

import { useEffect } from "react";

/**
 * Keeps <html lang> in sync with the active locale.
 *
 * The root layout sits above the [locale] segment so it cannot know the
 * language at render time; setting it here means screen readers announce the
 * page with the right pronunciation as soon as it loads.
 */
export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
