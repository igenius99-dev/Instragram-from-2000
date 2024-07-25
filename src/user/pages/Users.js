import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://cdn.motor1.com/images/mgl/zxxMzK/s1/2023-porsche-911-gt3-rs.webp",
      name: "yessirr",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
