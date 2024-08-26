import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  
  const [type, setType] = useState("password");
  const navigate=useNavigate()

  const handleShowPassword = () => {
    setType("text");
  };
  const handleHidePassword = () => {
    setType("password");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        data
      );
  
      if (response.status === 201) {
        toast.success(response.data.message);                
        navigate("/login",{replace:true})
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

 
  return (
    <>
<div className="header d-flex justify-content-between text-white p-3 align-items-center"></div>

<div className="body d-flex justify-content-center align-items-center vh-100">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 bg-white shadow p-4 rounded-4">
        <h3 className="text-center text-uppercase mb-4">Registration Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="fw-bold">First Name</label>
            <input
              {...register("firstName", {
                required: "First Name is Required",
              })}
              name="firstName"
              type="text"
              className="form-control px-2"
            />
            {errors.firstName && (
              <div className="error text-danger">
                {errors.firstName.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="fw-bold">Last Name</label>
            <input
              {...register("lastName", {
                required: "Last Name is Required",
              })}
              name="lastName"
              type="text"
              className="form-control px-2"
            />
            {errors.lastName && (
              <div className="error text-danger">
                {errors.lastName.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="fw-bold">Email</label>
            <input
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email",
                },
              })}
              name="email"
              type="email"
              className="form-control px-2"
            />
            {errors.email && (
              <div className="error text-danger">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="fw-bold">Password</label>
            <div className="input-group">
              <input
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                name="password"
                type={type}
                className="form-control px-2"
              />
              <span className="input-group-text">
                {type === "password" ? (
                  <FaEye onClick={handleShowPassword} />
                ) : (
                  <FaEyeSlash onClick={handleHidePassword} />
                )}
              </span>
            </div>
            {errors.password && (
              <div className="error text-danger">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="fw-bold">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is Required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              name="confirmPassword"
              type="password"
              className="form-control px-2"
            />
            {errors.confirmPassword && (
              <div className="error text-danger">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-4"
            style={{ backgroundColor: "purple" }}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link className="text-decoration-none" to="/login">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Register;
