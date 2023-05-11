'use client';
import Head from "next/head";
import CodeReview from "./components/CodeReview";
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
  const domain = "https://cleancode-ai.vercel.app";
  return (
    <>
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
      <main>
        <CodeReview />
        <Analytics />
      </main>
    </>
  );
}