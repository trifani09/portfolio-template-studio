import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Frame & Form — Premium Portfolio Templates", template: "%s | Frame & Form" },
  description:
    "Three design-led, customizable portfolio templates for developers, creatives, and independent professionals.",
  icons: { icon: "/mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
