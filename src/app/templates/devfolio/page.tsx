import type { Metadata } from "next";
import { DevfolioPage } from "@/components/devfolio/DevfolioPage";

export const metadata: Metadata = {
  title: "DevFolio — Developer Portfolio",
  description: "A premium dark portfolio template for product-minded software engineers.",
};
export default function Page() {
  return <DevfolioPage />;
}
