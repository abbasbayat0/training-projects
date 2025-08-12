import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My First Store",
  description: "the first store that I want to build with nextJS and TS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto p-2">
        {children}
      </body>
    </html>
  );
}
