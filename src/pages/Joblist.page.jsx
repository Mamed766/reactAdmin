import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { PiCaretUpDownFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import useSWR, { mutate } from "swr";
import AddJobModal from "./jobs/AddJobModal";
import { deleteData } from "../services/api";
import ViewModal from "../components/ViewModal.component";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Joblist = () => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);
  const [showModal, setShowModal] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [viewJob, setViewJob] = useState(null);
  if (error) {
    return (
      <h1 className="flex justify-center text-red-600 text-[10rem]">Error </h1>
    );
  }

  if (!data) {
    return (
      <div className="h-screen w-full flex justify-center items-center animate-spin-custom relative">
        <FaSpinner
          size={50}
          className="absolute text-blue-400  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }
  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      mutate("http://localhost:3001/data");
      toast.error("Item deleted successfully!");
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
  };

  const handleSave = () => {
    mutate("http://localhost:3001/data");
    setEditJob(null);
  };

  const handleEdit = (job) => {
    setEditJob(job);
    setShowModal(true);
  };

  const handleView = (job) => {
    setViewJob(job);
  };

  const headers = [
    "No",
    "Img",
    "Job Title",
    "Company Name",
    "Location",
    "Type",
    "Position",
    "Status",
    "Action",
  ];

  return (
    <div className="bg-[#2A3042] p-4 rounded-[4px]">
      <AddJobModal
        showModal={showModal}
        setShowModal={setShowModal}
        editJob={editJob}
        onSave={handleSave}
      />
      <ViewModal
        showModal={!!viewJob}
        setShowModal={() => setViewJob(null)}
        job={viewJob}
      />
      <div className="flex justify-between pb-4 border-b border-gray-600">
        <div className="flex items-center text-white">
          <h3>Jobs Lists</h3>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => {
              setEditJob(null);
              setShowModal(true);
            }}
            className="bg-blue-500 p-2 text-white rounded-md"
          >
            <p className="text-[12px]">Add New Job</p>
          </button>
          <div className="bg-[#32394E] p-2.5 rounded-md text-white cursor-pointer">
            <IoMdRefresh />
          </div>
          <div className="bg-[#34C38F] p-2 rounded-md cursor-pointer">
            <TbDotsVertical className="text-white" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <form className="flex gap-2" action="">
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
            className="bg-transparent w-[30%] border rounded-md p-1 outline-none border-gray-600 text-white"
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
            <tbody className="bg-transparent text-gray-500">
              {data &&
                data.map((user, index) => {
                  let statusColor = "";
                  if (user.status === "Active") {
                    statusColor = "bg-green-500 text-white ";
                  } else if (user.status === "New") {
                    statusColor = "bg-blue-500 text-white ";
                  } else if (user.status === "Close") {
                    statusColor = "bg-red-500 text-white ";
                  }

                  let typeColor = "";
                  if (user.type === "Full Time") {
                    typeColor = "bg-green-300 text-green-600";
                  } else if (user.type === "Part Time") {
                    typeColor = "bg-red-300 text-red-600";
                  } else if (user.type === "Freelance") {
                    typeColor = "bg-blue-300 text-blue-600";
                  } else if (user.type === "Internship") {
                    typeColor = "bg-orange-300 text-orange-600";
                  }

                  return (
                    <tr key={user.id} className="text-[13px]">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          src={user.file}
                          alt=""
                        />
                      </td>
                      <td className="px-6 py-4">{user.jobTitle}</td>
                      <td className="px-6 py-4">{user.companyName}</td>
                      <td className="px-6 py-4">{user.location}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${typeColor}`}
                        >
                          {user.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">{user.position}</td>
                      <td className={`px-6 py-4`}>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${statusColor}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="flex gap-2">
                          <li className="bg-blue-700 rounded-md">
                            <button
                              onClick={() => handleView(user)}
                              className="p-3"
                            >
                              <FaEye className="text-blue-300" />
                            </button>
                          </li>
                          <li
                            onClick={() => handleEdit(user)}
                            className="bg-blue-500 rounded-md"
                          >
                            <button className="p-3">
                              <FaPencilAlt className="text-blue-200" />
                            </button>
                          </li>
                          <li
                            onClick={() => handleDelete(user.id)}
                            className="bg-red-700 rounded-md"
                          >
                            <button className="p-3">
                              <FaTrash className="text-red-300" />
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Joblist;
