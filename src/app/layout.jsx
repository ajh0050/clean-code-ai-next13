'use client'
import "./globals.css";
import LayoutComponent from "./components/LayoutComponent";
import { DarkModeProvider } from "./contexts/darkMode";

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
