import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

import "tailwindcss/tailwind.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
       
      <button class="btn btn-green">
                  Home
      </button>
  
      </h2>
    </Layout>
  );
}
