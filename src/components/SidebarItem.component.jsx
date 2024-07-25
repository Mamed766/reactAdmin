import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, items, isOpen }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const toggleItemOpen = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-700"
        onClick={toggleItemOpen}
      >
        <span className={`${isOpen ? "block" : "hidden"}`}>{title}</span>
        {isOpen ? isItemOpen ? <FaChevronDown /> : <FaChevronRight /> : null}
      </div>
      {isItemOpen && isOpen && (
        <ul className="pl-4">
          {items.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="p-2 flex flex-col hover:bg-gray-600 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
