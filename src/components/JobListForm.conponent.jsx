import React from "react";

const JobListForm = ({
  search,
  showCount,
  status,
  type,
  setSearch,
  setShowCount,
  setStatus,
  setType,
}) => {
  return (
    <form className="flex gap-2" action="">
      <select
        className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
        name=""
        id=""
        value={showCount}
        onChange={(e) => setShowCount(Number(e.target.value))}
      >
        <option className="bg-gray-700" value="5">
          Show 5
        </option>
        <option className="bg-gray-700" value="10">
          Show 10
        </option>
        <option className="bg-gray-700" value="20">
          Show 20
        </option>
        <option className="bg-gray-700" value="30">
          Show 30
        </option>
        <option className="bg-gray-700" value="40">
          Show 40
        </option>
        <option className="bg-gray-700" value="50">
          Show 50
        </option>
      </select>
      <input
        type="text"
        className="w-full text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
        placeholder="Search for CompanyName"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
        name=""
        id=""
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option className="bg-gray-700" value="All">
          Status
        </option>
        <option className="bg-gray-700" value="All">
          All
        </option>
        <option className="bg-gray-700" value="Active">
          Active
        </option>
        <option className="bg-gray-700" value="New">
          New
        </option>
        <option className="bg-gray-700" value="Close">
          Close
        </option>
      </select>
      <select
        className="w-[20%] text-white p-[3px] border-gray-600 rounded-md outline-none border bg-transparent"
        name=""
        id=""
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option className="bg-gray-700" value="All">
          Select Type
        </option>
        <option className="bg-gray-700" value="All">
          All
        </option>
        <option className="bg-gray-700" value="Full Time">
          Full Time
        </option>
        <option className="bg-gray-700" value="Part Time">
          Part Time
        </option>
      </select>
      <input
        className="bg-transparent w-[30%] border rounded-md p-1 outline-none border-gray-600 text-white"
        type="date"
        id="date"
      />
    </form>
  );
};

export default JobListForm;
