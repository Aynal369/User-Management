import React from "react";
import { useNavigate } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ users }) => {
  const navigate = useNavigate();

  const GoCreateUser = () => {
    navigate("/users/add");
  };
  return (
    <section className="container pt-3">
      <div className="row">
        <div className="d-flex justify-content-around">
          <p className="fw-bold">User Management</p>
          <p>
            <button
              onClick={GoCreateUser}
              type="button"
              className="btn btn-light"
            >
              <FontAwesomeIcon icon={faUser} color="blue" />
              <span className="ms-2"> Create a new user</span>
            </button>
          </p>
          <p>
            Total Users: <span className="fw-bold">{users.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
