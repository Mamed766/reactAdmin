import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { postData, updateData } from "../../services/api"; // Import the updateData function

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AddJobModal = ({ showModal, setShowModal, editJob, onSave }) => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);

  const [formData, setFormData] = useState({
    jobId: "",
    jobTitle: "",
    companyName: "",
    location: "",
    position: "",
    type: "Full Time",
    status: "Active",
    file: null,
  });

  useEffect(() => {
    if (editJob) {
      setFormData(editJob);
    } else {
      setFormData({
        jobId: "",
        jobTitle: "",
        companyName: "",
        location: "",
        position: "",
        type: "Full Time",
        status: "Active",
        file: null,
      });
    }
  }, [editJob]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = () => {
        setFormData({ ...formData, file: fileReader.result });
      };
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editJob) {
        const response = await updateData(editJob.id, formData);
        if (response.status === 200) {
          mutate("http://localhost:3001/data");
        }
      } else {
        const response = await postData(formData);
        if (response.status === 201) {
          mutate("http://localhost:3001/data");
        }
      }
      onSave();
      setShowModal(false);
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#2A3042] p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg">
            {editJob ? "Edit Job" : "Add Job"}
          </h2>
          <button className="text-white" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400">Job Id</label>
            <input
              name="jobId"
              value={formData.jobId}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Job id"
              disabled={!!editJob}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Job Title</label>
            <input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Job Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Company Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Position</label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Position"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
            >
              <option value="Active">Active</option>
              <option value="New">New</option>
              <option value="Close">Close</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#32394E] text-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobModal;
