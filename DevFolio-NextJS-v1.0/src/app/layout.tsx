import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFolio — Developer Portfolio Template",
  description:
    "A premium dark portfolio template for product-minded software engineers and developers.",
  icons: { icon: "/mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
