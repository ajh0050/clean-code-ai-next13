'use client';
import Head from "next/head";
import CodeReview from "./components/CodeReview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Code AI</title>
        <meta
          name="description"
          content="Get custom tailored code reviews from an opinionated AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CodeReview />
      </main>
    </>
  );
}