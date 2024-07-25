import React from "react";
import { FaCog } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiFullscreen } from "react-icons/bi";
import SearchBar from "../../components/SearchBar.component";
import NotificationBell from "../../components/NotificationBell.component";
import AvatarMenu from "../../components/AvatarMenu.component";
import FlagMenu from "../../components/FlagMenu.component";

const Header = () => {
  return (
    <div className="relative">
      <nav className="bg-[#2A3042] p-4 flex items-center justify-between">
        <SearchBar />
        <div className="flex gap-5 items-center">
          <FlagMenu />
          <MdOutlineDashboardCustomize className="text-white text-[24px]  cursor-pointer" />
          <BiFullscreen className="text-[24px] text-white cursor-pointer" />
          <NotificationBell className="cursor-pointer" />
          <AvatarMenu className="cursor-pointer" />
          <FaCog className="text-white text-[20px] animate-spin cursor-pointer " />
        </div>
      </nav>
    </div>
  );
};

export default Header;
