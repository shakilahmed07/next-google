import React from "react";
import SearchOption from "./SearchOption";
import {
  SearchIcon,
  PlayIcon,
  PhotographIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

const SearchOptions = () => {
  return (
    <div className="flex w-full justify-evenly text-gray-700 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}
      <div className="flex space-x-6">
        <SearchOption Icon={SearchIcon} title="All" selected />
        <SearchOption Icon={PhotographIcon} title="Images" />
        <SearchOption Icon={PlayIcon} title="Videos" />
        <SearchOption Icon={NewspaperIcon} title="News" />
        <SearchOption Icon={MapIcon} title="Books" />
        <SearchOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <p className="link hidden sm:inline-flex">Tools</p>
      </div>
    </div>
  );
};

export default SearchOptions;
