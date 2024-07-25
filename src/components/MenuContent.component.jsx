import React from "react";

const MenuContent = ({ isOpen }) => {
  // if (!isOpen) return null;

  return (
    isOpen && (
      <div className="absolute animate-fade-in top-[60px] left-1/2 transform -translate-x-1/2 bg-[#2A3042] p-10 border border-gray-600 rounded-lg shadow-lg mt-2 max-w-[1440px] w-full">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <h4 className="text-white font-semibold">UI Components</h4>
            <ul className="text-gray-400">
              <li>Lightbox</li>
              <li>Range Slider</li>
              <li>Sweet Alert</li>
              <li>Rating</li>
              <li>Forms</li>
              <li>Tables</li>
              <li>Charts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Applications</h4>
            <ul className="text-gray-400">
              <li>Ecommerce</li>
              <li>Calendar</li>
              <li>Email</li>
              <li>Projects</li>
              <li>Tasks</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Extra Pages</h4>
            <ul className="text-gray-400">
              <li>Light Sidebar</li>
              <li>Compact Sidebar</li>
              <li>Horizontal Layout</li>
              <li>Maintenance</li>
              <li>Coming Soon</li>
              <li>Timeline</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">UI Components</h4>
            <ul className="text-gray-400">
              <li>Lightbox</li>
              <li>Range Slider</li>
              <li>Sweet Alert</li>
              <li>Rating</li>
              <li>Forms</li>
              <li>Tables</li>
              <li>Charts</li>
            </ul>
          </div>
          <div>
            <img
              className="w-[200px]"
              src="https://skote-v-dark.react.themesbrand.com/static/media/megamenu-img.8b069df40f2e8fc97bf9.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  );
};

export default MenuContent;
