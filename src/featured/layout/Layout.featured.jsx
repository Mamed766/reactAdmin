import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar.featured";
import Header from "../header/header.featured";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
