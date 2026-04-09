import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zoapi Icons",
  description: "Modern icon library for developers"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-text transition-colors duration-200">{children}</body>
    </html>
  );
}
