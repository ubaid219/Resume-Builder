import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Context } from "../../main";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = (props) => {
  const [type, setType] = useState("password");
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleShowPassword = () => {
    setType("text");
  };
  const handleHidePassword = () => {
    setType("password");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        data,
        { withCredentials: true }
      );

      if ((response.status = 201)) {
        toast.success(response.data.message);
        setIsAuthorized(true);
        props.fetchUser();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="container mt-5">
        <div className="body d-flex m-5 p-3 justify-content-around">
          <div className="right bg-white w-50 shadow p-4 rounded-4">
            <h3 className="text-xl-center text-uppercase">Log In</h3>

            <div className="d-flex flex-column align-items-center justify-content-between">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="email"
                    name="email"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                  {errors.email && (
                    <div className="error text-danger">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is Required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    type={type}
                    name="password"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                  {type === "password" ? (
                    <FaEye onClick={handleShowPassword} />
                  ) : (
                    <FaEyeSlash onClick={handleHidePassword} />
                  )}
                  {errors.password && (
                    <div className="error text-danger">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="rounded px-3 py-2 mt-4"
                  style={{ backgroundColor: "purple", color: "white" }}
                >
                  Log In
                </button>
              </form>
            </div>

            <div className="mt-3">
              <Link className="text-decoration-none" to="/register">
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
