import React, { useMemo, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { PiCaretUpDownFill } from "react-icons/pi";
import useSWR, { mutate } from "swr";
import AddJobModal from "./jobs/AddJobModal";
import { deleteData } from "../services/api";
import ViewModal from "../components/ViewModal.component";
import { FaAngleLeft, FaAngleRight, FaSpinner } from "react-icons/fa";
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
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(5);
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = () => {
    setSearch("");
    setShowCount(5);
    setStatus("All");
    setType("All");
    setCurrentPage(1);
    mutate("http://localhost:3001/data");
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleShowCountChange = (value) => {
    setShowCount(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const handleTypeChange = (value) => {
    setType(value);
    setCurrentPage(1);
  };

  const filteredAndPaginatedData = useMemo(() => {
    if (!data) return { paginatedData: [], totalPages: 0 };

    const filtered = data.filter((job) => {
      const matchesSearch = job.companyName
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = status === "All" || job.status === status;
      const matchesType = type === "All" || job.type === type;

      return matchesSearch && matchesStatus && matchesType;
    });

    const totalPages = Math.ceil(filtered.length / showCount);

    const startIndex = (currentPage - 1) * showCount;
    const endIndex = startIndex + showCount;
    const paginatedData = filtered.slice(startIndex, endIndex);

    return { paginatedData, totalPages };
  }, [data, search, showCount, status, type, currentPage]);

  const { paginatedData, totalPages } = filteredAndPaginatedData;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
          className="absolute text-blue-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          <div
            className="bg-[#32394E] p-2.5 rounded-md text-white cursor-pointer"
            onClick={resetFilters}
          >
            <IoMdRefresh />
          </div>
          <div className="bg-[#34C38F] p-2 rounded-md cursor-pointer">
            <TbDotsVertical className="text-white" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <JobListForm
          search={search}
          showCount={showCount}
          status={status}
          type={type}
          setSearch={handleSearchChange}
          setShowCount={handleShowCountChange}
          setStatus={handleStatusChange}
          setType={handleTypeChange}
        />
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
              {paginatedData.map((user, index) => (
                <JoblistCard
                  key={index}
                  user={user}
                  index={index}
                  handleView={handleView}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between text-gray-400 mt-4">
            <div>
              <p>
                Showing {Math.min(showCount, paginatedData.length)} of{" "}
                {data.length} results
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={`cursor-pointer ${
                  currentPage === 1 ? "text-gray-600" : "text-gray-400"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <FaAngleLeft />
              </div>
              <div className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                {currentPage}
              </div>
              <div
                className={`cursor-pointer ${
                  currentPage === totalPages ? "text-gray-600" : "text-gray-400"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Joblist;
