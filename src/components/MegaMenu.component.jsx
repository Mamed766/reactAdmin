import React, { useState } from "react";
import MenuToggle from "./MenuToggle.component";
import MenuContent from "./MenuContent.component";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuContent isOpen={isOpen} />
    </div>
  );
};

export default MegaMenu;
