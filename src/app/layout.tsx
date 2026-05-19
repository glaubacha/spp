import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPP Interconnection Map",
  description: "Parcel-level view of nearby SPP generation interconnection queue projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
