import type { Metadata } from "next";
import { WorkIndex } from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description: "Logos, merch, print, photo, the grid. Work from AP Creative Co.",
};

export default function WorkPage() {
  return <WorkIndex />;
}
