import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
  return (
    <div className="relative">
      <div className="absolute left-3 bottom-3 bg-red-400 w-[15px] h-[15] rounded-full flex justify-center items-center">
        <p className="text-[10px] text-white">3</p>
      </div>
      <FaBell className="text-white text-[20px] animate-bell" />
    </div>
  );
};

export default NotificationBell;
