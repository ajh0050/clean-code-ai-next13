// 'use client'
import "./globals.css";
import { Metadata } from "next";
import LayoutComponent from "./components/LayoutComponent";
import { DarkModeProvider } from "./contexts/darkMode";
import Head from "next/head";

export const metadata = {
  title: "Clean Code AI",
  description: "Get custom tailored code reviews from an opinionated AI.",
  openGraph: {
    title: "Clean Code AI",
    description: "This is a free tool for developers to get their code reviewed or refactored.",
    url: "https://cleancode-ai.vercel.app/",
    siteName: "https://cleancode-ai.vercel.app/",
    images: '/cleancode.png',
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function Layout({ children }) {
  // const domain = "https://cleancode-ai.vercel.app";
  return (
    <html lang="en">
      {/* <Head>
        <title>Clean Code AI</title>
        <meta
          name="description"
          content="Get custom tailored code reviews from an opinionated AI"
        />
        <meta property="og:title" content="Clean Code AI" />
        <meta property="og:description" content="This is a free tool for developers to get their code reviewed or refactored." />
        <meta name="image" property="og:image" content={`${domain}/cleancode.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body>
        <DarkModeProvider>
          <LayoutComponent>
            {children}
          </LayoutComponent>
        </DarkModeProvider>
      </body>
    </html>
  );
}
