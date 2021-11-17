import React from "react";
import Avatar from "../components/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="flex w-full justify-between p-4 text-sm text-gray-600">
      {/* left side */}
      <div className="flex space-x-4 items-center">
        <p className="link hidden md:inline">About</p>
        <p className="link hidden md:inline">Store</p>
      </div>

      {/* Right Side */}
      <div className="flex space-x-4 items-center">
        <p className="link">
          <a href="https://mail.google.com/mail/u/0/?ogbl#">Gmail</a>
        </p>
        <p className="link">
          <a href="https://www.google.com.bd/imghp?hl=en&authuser=0&ogbl">
            Image
          </a>
        </p>

        {/* Icon */}
        <ViewGridIcon className="h-9 w-9 cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full" />

        {/* Avatar */}
        <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I7YN9C7XM_hNayF9MyikaMW_IeNXEr6WmTgsns4=s32-c-mo" />
      </div>
    </header>
  );
};

export default Header;
