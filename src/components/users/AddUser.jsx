import React from "react";
import { Container, Row } from "react-bootstrap";

const AddUser = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <div className="col-lg-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AddUser;
