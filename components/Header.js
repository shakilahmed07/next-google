import React from "react";
import Avatar from "../components/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="flex justify-between p-4 text-sm text-gray-600">
      {/* left side */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right Side */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Image</p>

        {/* Icon */}
        <ViewGridIcon className="h-9 w-9 cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full" />

        {/* Avatar */}
        <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I7YN9C7XM_hNayF9MyikaMW_IeNXEr6WmTgsns4=s32-c-mo" />
      </div>
    </header>
  );
};

export default Header;
