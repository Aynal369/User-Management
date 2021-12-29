import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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

    fetch("https://dry-fortress-07116.herokuapp.com/users", {
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
    <>
      <main className="bg-light">
        <section className="container-fluid">
          <h3 className="text-center p-3">Add A New User</h3>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card shadow p-3 p-sm-5">
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
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
      </main>
      <Footer />
    </>
  );
};

export default AddUser;
