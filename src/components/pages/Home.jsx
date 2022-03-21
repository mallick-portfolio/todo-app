import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import UserTable from "../users/UserTable";
const Home = () => {
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

  return (
    <Container className="mt-3">
      <UserTable users={users} />
    </Container>
  );
};

export default Home;
