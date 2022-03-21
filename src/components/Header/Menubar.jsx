import React from "react";
import Menu from "./Menu";
import { menus } from "./menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TODO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {menus.map((menu, index) => (
              <Menu key={index} menu={menu} />
            ))}
          </ul>
          <div className="d-flex">
            <Link
              to="/users/add"
              className="btn btn-outline-success text-white"
            >
              <FontAwesomeIcon icon={faPlus} /> Add User
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
