import type { Metadata } from "next";
import WorkIndex from "@/components/WorkIndex";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from The Virtuose — advertising, social, brand films and long-form video for brands across Europe and beyond.",
};

export default function WorkPage() {
  return (
    <>
      <WorkIndex />
      <Footer />
    </>
  );
}
