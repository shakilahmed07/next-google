import React from "react";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

const Body = () => {
  return (
    <main>
      <form className="flex flex-col items-center mt-40 flex-grow mx-3">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 px-5 py-2 max-w-md sm:max-w-xl">
          <SearchIcon className="h-6 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-6 ml-3 cursor-pointer" />
        </div>
        {/* Google Short Search */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </main>
  );
};

export default Body;
