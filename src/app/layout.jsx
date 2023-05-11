import "./globals.css";
import LayoutComponent from "./components/LayoutComponent";
import { DarkModeProvider } from "./contexts/darkMode";

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
  return (
    <html lang="en">
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
