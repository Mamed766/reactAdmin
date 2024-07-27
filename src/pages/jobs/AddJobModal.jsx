import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSWR, { mutate } from "swr";
import { postData, updateData } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AddJobModal = ({ showModal, setShowModal, editJob, onSave }) => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);

  const formik = useFormik({
    initialValues: {
      jobId: "",
      jobTitle: "",
      companyName: "",
      location: "",
      position: "",
      type: "Full Time",
      status: "Active",
      file: null,
    },
    validationSchema: Yup.object({
      jobId: Yup.string().required("Job ID is required"),
      jobTitle: Yup.string().required("Job Title is required"),
      companyName: Yup.string().required("Company Name is required"),
      location: Yup.string().required("Location is required"),
      position: Yup.string().required("Position is required"),
      type: Yup.string().required("Type is required"),
      status: Yup.string().required("Status is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        if (editJob) {
          const response = await updateData(editJob.id, values);
          if (response.status === 200) {
            mutate("http://localhost:3001/data");
          }
          toast.info("Job updated successfully!");
        } else {
          const response = await postData(values);
          if (response.status === 201) {
            mutate("http://localhost:3001/data");
            toast.success("Job added successfully!");
          }
        }
        resetForm();
        onSave();
        setShowModal(false);
      } catch (error) {
        console.error("Failed to save data:", error);
      }
    },
  });

  useEffect(() => {
    if (editJob) {
      formik.setValues(editJob);
    } else {
      formik.resetForm();
    }
  }, [editJob]);

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
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400">Job Id</label>
            <input
              name="jobId"
              value={formik.values.jobId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Job id"
            />
            {formik.touched.jobId && formik.errors.jobId ? (
              <div className="text-red-500 text-sm">{formik.errors.jobId}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Job Title</label>
            <input
              name="jobTitle"
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Job Title"
            />
            {formik.touched.jobTitle && formik.errors.jobTitle ? (
              <div className="text-red-500 text-sm">
                {formik.errors.jobTitle}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Company Name</label>
            <input
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Company Name"
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.companyName}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Location</label>
            <input
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Location"
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="text-red-500 text-sm">
                {formik.errors.location}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Position</label>
            <input
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
              placeholder="Insert Position"
            />
            {formik.touched.position && formik.errors.position ? (
              <div className="text-red-500 text-sm">
                {formik.errors.position}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Type</label>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
            {formik.touched.type && formik.errors.type ? (
              <div className="text-red-500 text-sm">{formik.errors.type}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Status</label>
            <select
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 rounded bg-[#32394E] text-white"
            >
              <option value="Active">Active</option>
              <option value="New">New</option>
              <option value="Close">Close</option>
            </select>
            {formik.touched.status && formik.errors.status ? (
              <div className="text-red-500 text-sm">{formik.errors.status}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={(e) => {
                const file = e.currentTarget.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  formik.setFieldValue("file", reader.result);
                };
                reader.readAsDataURL(file);
              }}
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
