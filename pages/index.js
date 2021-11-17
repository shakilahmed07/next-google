import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next - Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
    </div>
  );
}
