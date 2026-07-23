import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/dictionaries";

/** The site lives under /en and /fr; send the bare root to the default. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
