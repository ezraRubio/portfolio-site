import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ezra Rubio : Developer</title>
        <meta name="description" content="Ezra's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Welcome to My Portfolio</h1>
        <p>...which is still in progress, check back again soon.</p>
      </main>
    </div>
  );
}
