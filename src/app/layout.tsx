import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "echo Webkom",
  description: "Nettsiden til echo Webkom.",
  themeColor: "black",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
