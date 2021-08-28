import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <h2>SRP page links</h2>
      <Link href="/repositories/70107781">
        <a>70107781</a>
      </Link>
      <br></br>
      <Link href="/repositories/70107782">
        <a>70107782</a>
      </Link>
      <br></br>
      <Link href="/repositories/70107783">
        <a>70107783</a>
      </Link>
      <br></br>
      <Link href="/repositories/70107784">
        <a>70107784</a>
      </Link>
      <br></br>
      <Link href="/repositories/70107785">
        <a>70107785</a>
      </Link>
      <br></br>
      <Link href="/repositories/70107786">
        <a>70107786</a>
      </Link>
    </div>
  );
}
