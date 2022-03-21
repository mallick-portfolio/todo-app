import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import User from "../users/User";
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
    <Container className="mt-5">
      <Table striped bordered hover className="shodow-lg">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
