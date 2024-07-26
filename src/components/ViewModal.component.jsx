import React from "react";

const ViewModal = ({ showModal, setShowModal, job }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#2A3042] p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg">Job Details</h2>
          <button className="text-white" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>
        <div className="mb-4">
          <img
            className="w-full h-64 object-cover rounded"
            src={job.file}
            alt={job.jobTitle}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Type</label>
          <p className="text-white">{job.type}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Status</label>
          <p className="text-white">{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
