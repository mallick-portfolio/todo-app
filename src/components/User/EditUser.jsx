import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputField from "./InputField";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [user, setUser] = useState({});
  const { firstName, lastName, userName, email, phone } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const editUser = async () => {
      const data = await loadUser();
      setUser(data);
    };
    editUser();
  }, []);

  // Handel form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3006/users/${id}`, user);
    history("/");
  };

  const loadUser = async () => {
    const response = await axios.get(`http://localhost:3006/users/${id}`);
    return response.data;
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md="6">
          <form onSubmit={handleSubmit}>
            <InputField
              value={firstName || ""}
              handleChange={handleChange}
              name={"firstName"}
              placeholder="First Name"
            />
            <InputField
              value={lastName || ""}
              handleChange={handleChange}
              name={"lastName"}
              placeholder="Last Name"
            />
            <InputField
              value={userName || ""}
              handleChange={handleChange}
              name={"userName"}
              placeholder="User Name"
            />
            <InputField
              type="email"
              value={email || ""}
              handleChange={handleChange}
              name={"email"}
              placeholder="Email Address"
            />
            <InputField
              value={phone || ""}
              handleChange={handleChange}
              name={"phone"}
              placeholder="Phone Number"
            />
            <button className="btn btn-primary">Add User</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
