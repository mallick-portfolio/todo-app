import React from "react";
import { Table } from "react-bootstrap";
import User from "./User";
const UserTable = ({ users }) => {
  return (
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
  );
};

export default UserTable;
