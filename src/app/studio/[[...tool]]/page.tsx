import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/** The admin lives on the site itself: the-virtuose.com/studio */
export const dynamic = "force-static";
export const metadata = {
  title: "Studio — The Virtuose",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
