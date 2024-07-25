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
        <div className="flex items-center gap-2">{title}</div>
        {isOpen && items ? (
          isItemOpen ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )
        ) : null}
      </div>
      {isItemOpen && isOpen && items && (
        <ul className="pl-4">
          {items.map((item, index) => (
            <Link key={index} to={item.path}>
              <li className="p-2 hover:bg-gray-600 cursor-pointer">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
