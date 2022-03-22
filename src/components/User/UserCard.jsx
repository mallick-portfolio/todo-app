import { faDeleteLeft, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, email, userName, phone } = user;
  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{userName}</td>
      <td>{phone}</td>
      <td>
        <button className="btn btn-info">
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button className="btn btn-warning mx-1">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-danger mx-1">
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
