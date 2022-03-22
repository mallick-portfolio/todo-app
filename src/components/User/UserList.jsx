import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">User Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user=><UserCard key={user.id} user={user} />)}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
