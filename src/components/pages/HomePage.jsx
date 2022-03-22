import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "../User/UserList";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await axios.get("http://localhost:3006/users");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await loadUsers();
      setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  return <div>{users.length > 0 && <UserList users={users} />}</div>;
};

export default HomePage;
