import React from "react";
import { Button } from "react-bootstrap";

const User = ({ user }) => {
  const { firstName, lastName, userName, email } = user;
  return (
    <tr>
      <td>{firstName} </td>
      <td>{lastName}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        <Button valriant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default User;
