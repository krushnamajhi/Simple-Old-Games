import React from "react";
import Link from 'next/link'
import Head from 'next/head'


function HeadSetup({ title, header }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
        />
      </Head>
      <Link href="./">
        <button className="p-2 m-2 h4 btn btn-sm btn-primary">
          &larr; Go Back
        </button>
      </Link>
      <center>
        <h1>{header}</h1>
      </center>
    </>
  );
}

export default HeadSetup;
