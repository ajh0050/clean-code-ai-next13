'use client';
import CodeReview from "./components/CodeReview";
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
  const domain = "https://cleancode-ai.vercel.app";
  return (
    <>
      <main>
        <CodeReview />
        <Analytics />
      </main>
    </>
  );
}