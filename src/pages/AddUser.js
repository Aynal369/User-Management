import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const fullName = data.fullName;
    const emailAddress = data.emailAddress;
    const phoneNumber = data.phoneNumber;
    const fullAddress = data.fullAddress;

    const newUser = {
      fullName,
      emailAddress,
      phoneNumber,
      fullAddress,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((results) => {
        if (results.insertedId) {
          alert("Successfully added new user");
          reset();
          navigate("/");
        }
      });
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <section className="container-fluid min-vh-100">
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="card bg-light p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
              <div className="col-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  {...register("fullName")}
                  required
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
                  {...register("emailAddress", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                    },
                  })}
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
                  {...register("fullAddress")}
                  required
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
                  {...register("phoneNumber")}
                  required
                />
              </div>
              <div className="text-center pt-3">
                <button type="submit" className="btn btn-dark px-5">
                  Add Now
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

export default AddUser;
