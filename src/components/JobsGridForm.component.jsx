import React from "react";
import { FaSearch } from "react-icons/fa";

const JobsGridForm = () => {
  return (
    <form
      className="flex gap-2 bg-[#2A3042] h-[4rem] p-2 items-center text-gray-400 rounded-md "
      action=""
    >
      <input
        type="search"
        className="w-[35%] bg-transparent p-1 outline-none border border-gray-700 rounded-md"
        placeholder="Search your job"
      />
      <input
        className="w-[15%] bg-transparent outline-none p-1 border border-gray-700 rounded-md"
        type="text"
        placeholder="San Francisco, LA"
      />
      <input
        className="w-[15%] bg-transparent outline-none p-1 border border-gray-700 rounded-md"
        type="text"
        placeholder="Job Categories"
      />
      <input
        className="w-[15%] outline-none bg-transparent p-1 border border-gray-700 rounded-md"
        type="date"
      />
      <div className="flex gap-2">
        <button className="flex items-center text-white bg-blue-400 rounded-md p-1 w-[110px] h-[40px] gap-2">
          <FaSearch />
          Find Jobs
        </button>
        <button className="bg-[#636678] text-white p-1 rounded-md w-[110px] h-[40px]">
          Advance
        </button>
      </div>
    </form>
  );
};

export default JobsGridForm;
