import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameZone",
  description: "Varje spelare har en plats. Varje stad har en historia.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="sv">
      <body>{children}</body>
      </html>
  );
}