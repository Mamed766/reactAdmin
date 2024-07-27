import React from "react";
import UserCard from "./UserCard";

const UserList = ({ data }) => {
  return (
    <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data && data.map((user, index) => <UserCard key={index} user={user} />)}
    </div>
  );
};

export default UserList;
