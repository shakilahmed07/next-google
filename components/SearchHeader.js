import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import SearchOptions from "./SearchOptions";
import { ViewGridIcon } from "@heroicons/react/solid";
import { CogIcon } from "@heroicons/react/outline";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="sm:flex p-5 items-center w-full">
        <div className="flex justify-between mb-3 sm:mb-0">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />

          <Avatar
            url="https://lh3.googleusercontent.com/ogw/ADea4I7YN9C7XM_hNayF9MyikaMW_IeNXEr6WmTgsns4=s32-c-mo"
            className="ml-3 sm:hidden"
          />
        </div>
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg px-5 py-2 sm:ml-10 sm:mr-5 items-center max-w-3xl">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow px-2 w-full focus-within:outline-none"
          />
          <XIcon
            className="h-6 mr-2 text-gray-500 cursor-pointer transform transition duration-100 hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 cursor-pointer
          text-blue-500 mr-2 border-l-2 border-gray-300 pl-4"
          />
          <SearchIcon
            onClick={search}
            className="h-6 cursor-pointer text-blue-500"
          />
        </form>

        <div className="flex items-center ml-auto">
          {/* Icon */}
          <CogIcon className="h-10 w-10 cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full hidden sm:inline-flex" />

          <ViewGridIcon className="h-10 w-10 cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full ml-2 hidden sm:inline-flex" />

          {/* Avatar */}
          <Avatar
            url="https://lh3.googleusercontent.com/ogw/ADea4I7YN9C7XM_hNayF9MyikaMW_IeNXEr6WmTgsns4=s32-c-mo"
            className="ml-3 hidden sm:inline-flex"
          />
        </div>
      </div>
      {/* Search Options */}
      <SearchOptions />
    </header>
  );
};

export default SearchHeader;
