import React, { useRef } from "react";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <form className="flex flex-col items-center flex-grow mx-3 mt-10 w-4/5">
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
      <div className="flex w-full items-center mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 px-5 py-2 max-w-md sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-6 text-gray-500 mr-3" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-6 ml-3 cursor-pointer" />
      </div>

      {/* Google Short Search */}
      <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button className="btn">
          <a href="https://www.google.com/doodles" target="_blank">
            I'm Feeling Lucky
          </a>
        </button>
      </div>
    </form>
  );
};

export default Body;
