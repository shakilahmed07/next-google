import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

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
      <main>
        <form>
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
          />
          <div className="flex items-center">
            <SearchIcon className="h-6 text-gray-500 mr-5" />
            <input type="text" className="focus:outline-none bg-gray-500" />
            <MicrophoneIcon className="h-6" />
          </div>
        </form>
      </main>

      {/* Footer */}
    </div>
  );
}
