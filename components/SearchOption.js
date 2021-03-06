import React from "react";

const SearchOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 cursor-pointer border-transparent hover:text-blue-500 hover:border-blue-500 pb-2 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4 hidden sm:inline-flex" />
      <p>{title}</p>
    </div>
  );
};

export default SearchOption;
