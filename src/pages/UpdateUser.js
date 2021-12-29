import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleSubmit = (e) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          navigate("/");
        }
      });
    e.preventDefault();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <section className="container-fluid bg-light min-vh-100">
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="card p-5">
            <form onSubmit={handleSubmit} className="row g-4">
              <div className="col-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={user.fullName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  value={user.emailAddress || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  value={user.phoneNumber || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="fullAddress" className="form-label">
                  Full Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullAddress"
                  value={user.fullAddress || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center pt-3">
                <button type="submit" className="btn btn-dark px-5">
                  Update Now
                </button>
              </div>
            </form>
            <div className="text-center pt-5">
              <button
                onClick={handleGoHome}
                type="submit"
                className="btn btn-light px-5"
              >
                back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateUser;
