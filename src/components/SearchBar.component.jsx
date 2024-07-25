import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import MegaMenu from "./MegaMenu.component";
const SearchBar = () => {
  return (
    <div className="flex gap-5 items-center">
      <FaBars className="text-white" />
      <div className="flex gap-2 items-center">
        <FaSearch className="text-gray-500" />
        <input
          className="bg-transparent pl-1 text-white outline-none rounded"
          placeholder="Search..."
          type="text"
        />
      </div>
      <MegaMenu />
    </div>
  );
};

export default SearchBar;
