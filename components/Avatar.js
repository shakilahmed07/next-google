import React from "react";

const Avatar = ({ url }) => {
  return (
    <img
      src={url}
      alt="profile picture"
      loading="lazy"
      className="h-8 hover:ring-2 hover:ring-gray-300 rounded-full cursor-pointer transform transition duration-150 hover:scale-110"
    />
  );
};

export default Avatar;
