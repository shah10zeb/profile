import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { UserProvider } from "@/components/UserProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shahzeb.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shahzeb Siddiqui - Software Engineer Portfolio",
  description: "Portfolio of Shahzeb Siddiqui, a full-stack engineer specializing in microservices and cloud infrastructure.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shahzeb Siddiqui - Software Engineer Portfolio",
    description: "Portfolio of Shahzeb Siddiqui, a full-stack engineer specializing in microservices and cloud infrastructure.",
    url: baseUrl,
    siteName: "Shahzeb Siddiqui Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzeb Siddiqui - Software Engineer Portfolio",
    description: "Portfolio of Shahzeb Siddiqui, a full-stack engineer specializing in microservices and cloud infrastructure.",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <UserProvider>
            {children}
          </UserProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
