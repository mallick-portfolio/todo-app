import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
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
        <Button variant="info">
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button variant="success" className="mx-2">
          <FontAwesomeIcon icon={faPencil} />
        </Button>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default User;
