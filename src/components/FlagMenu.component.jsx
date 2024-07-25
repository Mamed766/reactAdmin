import React, { useState } from "react";

const FlagMenu = () => {
  const [isFlagOpen, setIsFlagOpen] = useState(false);

  const flagToggleMenu = (e) => {
    e.stopPropagation();
    setIsFlagOpen((prev) => !prev);
  };

  return (
    <div>
      <ul>
        <li>
          <img
            className="w-8 h-5 object-cover cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt=""
            onClick={flagToggleMenu}
          />
        </li>
      </ul>
      {isFlagOpen && (
        <ul className="absolute right-[280px] animate-fade-in top-[60px] flex flex-col gap-3  bg-[#2A3042] p-8 border border-gray-600 rounded-lg shadow-lg mt-2 max-w-[1440px]">
          <li
            className="flex gap-2 text-white cursor-pointer "
            onClick={flagToggleMenu}
          >
            <img
              className="w-8 h-5 object-cover cursor-pointer "
              src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
              alt=""
            />
            <p>Spanish</p>
          </li>
          <li
            className="flex gap-2 text-white cursor-pointer"
            onClick={flagToggleMenu}
          >
            <img
              className="w-8 h-5 object-cover cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20070926182838"
              alt=""
            />
            <p>German</p>
          </li>
          <li
            className="flex gap-2 text-white cursor-pointer"
            onClick={flagToggleMenu}
          >
            <img
              className="w-8 h-5 object-cover cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png?20160518044416"
              alt=""
            />
            <p>Italian</p>
          </li>
          <li
            className="flex gap-2 text-white cursor-pointer"
            onClick={flagToggleMenu}
          >
            <img
              className="w-8 h-5 object-cover cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png?20210709124240"
              alt=""
            />
            <p>Azerbaijan</p>
          </li>
          <li
            className="flex gap-2 text-white cursor-pointer"
            onClick={flagToggleMenu}
          >
            <img
              className="w-8 h-5 object-cover cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt=""
            />
            <p>English</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FlagMenu;
