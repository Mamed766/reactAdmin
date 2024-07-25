import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <ul onClick={toggleMenu} className="cursor-pointer">
      <li className="text-white flex items-center gap-1">
        Mega menu
        <FaAngleDown className={`text-[10px] ${isOpen ? "rotate-180" : ""}`} />
      </li>
    </ul>
  );
};

export default MenuToggle;
