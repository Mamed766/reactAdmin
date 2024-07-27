import React from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const JoblistCard = ({ user, index, handleView, handleEdit, handleDelete }) => {
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
            <button onClick={() => handleView(user)} className="p-3">
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
};

export default JoblistCard;
