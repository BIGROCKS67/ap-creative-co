import type { Metadata } from "next";
import { ServicesWork } from "@/components/ServicesWork";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, photo and video, design and print, websites, campaigns and events.",
};

export default function ServicesPage() {
  return <ServicesWork />;
}
