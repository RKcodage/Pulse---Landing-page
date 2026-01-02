import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pulse - Plateforme SaaS moderne",
  description: "Rationalisez votre flux de travail avec notre puissante solution SaaS",
  generator: "Rayan Kabra",
  openGraph: {
    title: "Pulse - Plateforme SaaS moderne",
    description: "Rationalisez votre flux de travail avec notre puissante solution SaaS",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Pulse",
      },
    ],
    type: "website",
    siteName: "Pulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse - Plateforme SaaS moderne",
    description: "Rationalisez votre flux de travail avec notre puissante solution SaaS",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
