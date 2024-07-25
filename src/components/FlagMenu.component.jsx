import React, { useState } from "react";
import FlagContent from "./FlagContent.component";

const FlagMenu = () => {
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState({
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    alt: "Flag of the United States",
  });

  const flagToggleMenu = (e) => {
    e.stopPropagation();
    setIsFlagOpen((prev) => !prev);
  };

  const changeFlag = (flag) => {
    setSelectedFlag(flag);
    setIsFlagOpen(false);
  };

  return (
    <div>
      <ul>
        <li>
          <img
            className="w-8 h-5 object-cover cursor-pointer"
            src={selectedFlag.src}
            alt={selectedFlag.alt}
            onClick={flagToggleMenu}
          />
        </li>
      </ul>
      <FlagContent isFlagOpen={isFlagOpen} changeFlag={changeFlag} />
    </div>
  );
};

export default FlagMenu;
