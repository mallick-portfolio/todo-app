import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputField from "./InputField";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialValue = {
  id: uuidv4(),
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { firstName, lastName, userName, email, phone } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const history = useNavigate();

  // Handel form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !userName || !email || !phone) {
      alert("please provide all field");
      return;
    }
    await axios.post("http://localhost:3006/users", user);
    setUser(initialValue);
    history("/");
  };
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md="6">
          <form onSubmit={handleSubmit}>
            <InputField
              value={firstName}
              handleChange={handleChange}
              name={"firstName"}
              placeholder="First Name"
            />
            <InputField
              value={lastName}
              handleChange={handleChange}
              name={"lastName"}
              placeholder="Last Name"
            />
            <InputField
              value={userName}
              handleChange={handleChange}
              name={"userName"}
              placeholder="User Name"
            />
            <InputField
              type="email"
              value={email}
              handleChange={handleChange}
              name={"email"}
              placeholder="Email Address"
            />
            <InputField
              value={phone}
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

export default AddUser;
