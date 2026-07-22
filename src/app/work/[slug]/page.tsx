import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { works, getWork, adjacentWork } from "@/lib/works";
import WorkDetail from "@/components/WorkDetail";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Not found" };
  return {
    title: `${work.title} — ${work.client}`,
    description: work.summary,
    openGraph: {
      title: `${work.title} — The Virtuose`,
      description: work.summary,
      type: "article",
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const next = adjacentWork(slug);
  return <WorkDetail work={work} next={next} />;
}
