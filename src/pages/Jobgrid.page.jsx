import React from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import useSWR from "swr";
import { fetcher } from "./Joblist.page";

const Jobgrid = () => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);
  if (!data) {
    return (
      <div className="h-screen w-full flex justify-center items-center animate-spin-custom relative">
        <FaSpinner
          size={50}
          className="absolute text-blue-400  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="">
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

        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data &&
            data.map((user, index) => {
              let typeColor = "";
              if (user.type === "Full Time") {
                typeColor = "bg-green-300 text-green-600";
              } else if (user.type === "Part Time") {
                typeColor = "bg-red-300 text-red-600";
              } else if (user.type === "Freelance") {
                typeColor = "bg-blue-300 text-blue-600";
              } else if (user.type === "Internship") {
                typeColor = "bg-orange-300 text-orange-600";
              }

              return (
                <div
                  key={index}
                  className="bg-[#2A3042] p-8 flex flex-col gap-3 rounded-md"
                >
                  <div>
                    <img className="w-10 rounded-md" src={user.file} alt="" />
                  </div>
                  <div>
                    <div>
                      <p className="text-white">{user.jobTitle}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px] text-gray-400">
                      <p>{user.companyName}</p>
                      <p className="flex items-center gap-2">
                        <FaLocationDot /> {user.location}
                      </p>
                    </div>
                  </div>
                  <div
                    className={` h-[15px]  items-center text-[10px] w-[60px] rounded-md ${typeColor}`}
                  >
                    <p className=" flex items-center justify-center  ">
                      {user.type}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <button className="bg-[#34c38f] w-[50%] text-green-900 p-1 rounded-md">
                      View Profile
                    </button>
                    <button className="bg-[#556ee6] w-[50%] text-blue-900 p-1 rounded-md">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Jobgrid;
