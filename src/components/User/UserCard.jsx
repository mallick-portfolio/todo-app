import { faDeleteLeft, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { firstName, lastName, email, userName, phone, id } = user;
  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{userName}</td>
      <td>{phone}</td>
      <td>
        <Link to={`/users/show/${id}`} className="btn btn-info">
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Link to={`/users/edit/${id}`} className="btn btn-warning mx-1">
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <button className="btn btn-danger mx-1">
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
