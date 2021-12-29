import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const url = `https://dry-fortress-07116.herokuapp.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleSubmit = (e) => {
    const url = `https://dry-fortress-07116.herokuapp.com/users/${id}`;
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
    <>
      <main className="bg-light">
        <section className="container-fluid">
          <h3 className="text-center p-3">Update User Data</h3>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card shadow p-3 p-sm-5">
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
      </main>
      <Footer />
    </>
  );
};

export default UpdateUser;
