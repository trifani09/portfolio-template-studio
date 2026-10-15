import type { Metadata } from "next";
import { FormaPage } from "@/components/forma/FormaPage";

export const metadata: Metadata = {
  title: "Forma — Creative Portfolio",
  description: "An editorial portfolio template for independent designers and art directors.",
};
export default function Page() {
  return <FormaPage />;
}
