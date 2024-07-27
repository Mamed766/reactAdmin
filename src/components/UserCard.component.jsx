import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const UserCard = ({ user }) => {
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
    <div className="bg-[#2A3042] p-8 flex flex-col gap-3 rounded-md">
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
        <p className=" flex items-center justify-center  ">{user.type}</p>
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
};

export default UserCard;
