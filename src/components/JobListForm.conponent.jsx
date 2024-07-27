import React from "react";

const JobListForm = () => {
  return (
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
  );
};

export default JobListForm;
