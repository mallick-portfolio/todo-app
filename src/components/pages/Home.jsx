import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
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
    <Container>
      {console.log(users)}
      <div>
        <h1 users={users}>home component</h1>
        <Button variant="info">Hello world</Button>
      </div>
    </Container>
  );
};

export default Home;
