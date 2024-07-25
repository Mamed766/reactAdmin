import React from "react";
import flags from "../static/mockdb";

const FlagContent = ({ isFlagOpen, changeFlag }) => {
  return (
    <div>
      {isFlagOpen && (
        <ul className="absolute right-[280px] animate-fade-in top-[60px] flex flex-col gap-3  bg-[#2A3042] p-8 border border-gray-600 rounded-lg shadow-lg mt-2 max-w-[1440px]">
          {flags.map((flag) => (
            <li
              className="flex gap-2 text-white cursor-pointer "
              onClick={() => changeFlag(flag)}
            >
              <img
                className="w-8 h-5 object-cover cursor-pointer "
                src={flag.src}
                alt={flag.alt}
              />
              <p>{flag.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlagContent;
