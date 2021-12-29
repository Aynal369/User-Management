import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dry-fortress-07116.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClientDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://dry-fortress-07116.herokuapp.com/users/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted 1 user successfully");
            const remaining = users.filter((client) => client._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  const handleGoUpdateClientPage = (id) => {
    navigate(`/users/update/${id}`);
  };
  return (
    <>
      <Navbar users={users} />
      <main>
        <section className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm table align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Full Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Full Address</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.fullName}</td>
                        <td>{data.emailAddress}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.fullAddress}</td>
                        <td className="text-center">
                          <button
                            onClick={() => handleGoUpdateClientPage(data._id)}
                            type="button"
                            className="btn btn-light"
                          >
                            <FontAwesomeIcon icon={faEdit} color="blue" />
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => handleClientDelete(data._id)}
                            type="button"
                            className="btn btn-light"
                          >
                            <FontAwesomeIcon icon={faTrash} color="red" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Users;
