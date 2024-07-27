import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { PiCaretUpDownFill } from "react-icons/pi";
import useSWR, { mutate } from "swr";
import AddJobModal from "./jobs/AddJobModal";
import { deleteData } from "../services/api";
import ViewModal from "../components/ViewModal.component";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { headers } from "../static/mockdb";
import JoblistCard from "../components/JoblistCard.component";
import JobListForm from "../components/JobListForm.conponent";

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
        <JobListForm />
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
                  return (
                    <JoblistCard
                      user={user}
                      index={index}
                      handleView={handleView}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
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
