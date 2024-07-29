import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "visual novel game Soul Wanderer download in iOS APP",
  description: "visual novel, game, Soul Wanderer,ios, Adventure Games，New planet，Anime role，2D，Two dimensions，Genshin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
