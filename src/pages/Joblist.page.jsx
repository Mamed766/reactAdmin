import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { PiCaretUpDownFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Joblist = () => {
  const headers = [
    "No",
    "Img",
    "Job Title",
    "Company Name",
    "Location",
    "Position",
    "Type",
    "Status",
    "Action",
  ];

  return (
    <div className="bg-[#2A3042] p-4 rounded-[4px]">
      <div className="flex justify-between pb-4 border-b border-gray-600">
        <div className="flex items-center  text-white ">
          <h3>Jobs Lists</h3>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <button className="bg-blue-500 p-2 text-white rounded-md ">
            <p className="text-[12px]">Add New Job</p>
          </button>
          <div className="bg-[#32394E] p-2.5 rounded-md text-white cursor-pointer">
            <IoMdRefresh className=" " />
          </div>
          <div className="bg-[#34C38F] p-2 rounded-md cursor-pointer">
            <TbDotsVertical className="text-white" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <form className="flex gap-2 " action="">
          <select
            className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
            name=""
            id=""
          >
            <option className="bg-gray-700" value="Show 10">
              Show 10
            </option>
            <option className="bg-gray-700" value="Show 20">
              Show 20
            </option>
            <option className="bg-gray-700" value="Show 30">
              Show 30
            </option>
            <option className="bg-gray-700" value="Show 40">
              Show 40
            </option>
            <option className="bg-gray-700" value="Show 50">
              Show 50
            </option>
          </select>
          <input
            type="text"
            className="w-full text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
            placeholder="Search for ..."
          />
          <select
            className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
            name=""
            id=""
          >
            <option className="bg-gray-700" value="Show 10">
              Status
            </option>
            <option className="bg-gray-700" value="Show 20">
              All
            </option>
            <option className="bg-gray-700" value="Show 30">
              Active
            </option>
            <option className="bg-gray-700" value="Show 40">
              New
            </option>
          </select>
          <select
            className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
            name=""
            id=""
          >
            <option className="bg-gray-700" value="Show 10">
              Select Type
            </option>
            <option className="bg-gray-700" value="Show 20">
              All
            </option>
            <option className="bg-gray-700" value="Show 30">
              Full Time
            </option>
            <option className="bg-gray-700" value="Show 40">
              Part Time
            </option>
          </select>
          <input
            className="bg-transparent w-[30%] border rounded-md p-1 outline-none border-gray-600 text-white "
            type="date"
            id="date"
          />
        </form>
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-transparent">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-left text-[13px] font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      {header}
                      <PiCaretUpDownFill className="ml-2" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-transparent text-gray-500  ">
              <tr className="text-[11px]">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg"
                    alt=""
                  />
                </td>
                <td className="px-6 py-4">Magento Developer</td>
                <td className="px-6 py-4">Web Technology pvt.ltd</td>
                <td className="px-6 py-4">Location</td>
                <td className="px-6 py-4">Position</td>
                <td className="px-6 py-4">Type</td>
                <td className="px-6 py-4">Status</td>
                <td className="px-6 py-4">
                  <ul className="flex gap-2">
                    <li className="bg-blue-700 rounded-md">
                      <button className="p-3">
                        <FaEye className="text-blue-300" />
                      </button>
                    </li>
                    <li className="bg-blue-500 rounded-md">
                      <button className="p-3 ">
                        <FaPencilAlt className="text-blue-200" />
                      </button>
                    </li>
                    <li className="bg-red-700 rounded-md">
                      <button className="p-3">
                        <FaTrash className="text-red-300" />
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Joblist;
