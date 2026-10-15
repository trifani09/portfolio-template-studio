import type { Metadata } from "next";
import { ElevatePage } from "@/components/elevate/ElevatePage";

export const metadata: Metadata = {
  title: "Elevate — Professional Portfolio",
  description:
    "A polished portfolio template for consultants, strategists, and independent professionals.",
};
export default function Page() {
  return <ElevatePage />;
}
