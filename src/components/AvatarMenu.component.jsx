import React from "react";
import { FaAngleDown } from "react-icons/fa";

const AvatarMenu = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="avatar cursor-pointer  border-4 border-gray-500 rounded-full">
          <img
            className="w-8 rounded-full"
            src="https://skote-v-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
            alt=""
          />
        </div>
        <ul>
          <li className="text-white flex items-center cursor-pointer gap-1">
            admin <FaAngleDown className="text-[10px]" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarMenu;
