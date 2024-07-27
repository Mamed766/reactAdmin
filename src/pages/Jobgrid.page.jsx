import React from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import useSWR from "swr";
import { fetcher } from "./Joblist.page";
import JobsGridForm from "../components/JobsGridForm";
import UserList from "../components/UserList";

const Jobgrid = () => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);

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
  return (
    <div>
      <div className="">
        <JobsGridForm />
        <UserList data={data} />
      </div>
    </div>
  );
};

export default Jobgrid;
