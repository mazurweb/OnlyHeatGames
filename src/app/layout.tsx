import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnlyHeat Games - Trading Cards, Video Games & Gaming Guides",
  description:
    "Your local game store online. Shop Pokemon, One Piece, PS5, PS4 and more. Plus free guides for TFT, League of Legends, and other games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
