import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../main";
import toast from "react-hot-toast";


const PersonalInfo = () => {
  const {setPersonalInfo}=useContext(Context)

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    setPersonalInfo(data);
    toast.success("Details Submitted");
    navigate("/education");
  };

  return (
    <>
      
      <div className="body d-flex m-5 p-3 justify-content-around">
        <div className="left bg-white w-25 shadow p-4 d-flex gap-5 pt-5 flex-column rounded-4">
          <Link
            className="btn  text-decoration-none text-black"
            style={{ backgroundColor: "white", border: "2px solid black" }}
            to="/personalinfo"
          >
            Personal Information
          </Link>
          <Link
            className="btn  text-decoration-none text-black"
            style={{ backgroundColor: "white", border: "2px solid black" }}
            to="/education"
          >
            Education
          </Link>
          <Link
            className="btn  text-decoration-none text-black"
            style={{ backgroundColor: "white", border: "2px solid black" }}
            to="/experience"
          >
            Experience
          </Link>
          <Link
            className="btn  text-decoration-none text-black"
            style={{ backgroundColor: "white", border: "2px solid black" }}
            to="/contactinfo"
          >
            Contact Information
          </Link>
          <Link
            className="btn  text-decoration-none text-black"
            style={{ backgroundColor: "white", border: "2px solid black" }}
            to="/certification"
          >
            Award/Certification
          </Link>
        </div>
        <div className="right bg-white w-50 shadow p-4 rounded-4">
          <h3>Personal Information</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">First Name</label>
                <input
                  {...register("firstName", {
                    required: "First Name is Required",
                  })}
                  name="firstName"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.firstName && (
                  <div className="error text-danger">
                    {errors.firstName.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Last Name</label>
                <input
                  {...register("lastName", {
                    required: "Last Name is Required",
                  })}
                  name="lastName"
                  type="text"
                  className="rounded py-2  px-2"
                  style={{ width: "300px" }}
                />
                {errors.lastName && (
                  <div className="error text-danger">
                    {errors.lastName.message}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Profession</label>
                <input
                  {...register("profession", {
                    required: "Profession is Required",
                  })}
                  name="profession"
                  type="text"
                  className="rounded py-2  px-2"
                  style={{ width: "300px" }}
                />
                {errors.profession && (
                  <div className="error text-danger">
                    {errors.profession.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Address</label>
                <input
                  {...register("address", {
                    required: "Address is Required",
                    maxLength: {
                      value: 50,
                      message: "Address cannot be more  than 50 characters",
                    },
                  })}
                  name="address"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.address && (
                  <div className="error text-danger">
                    {errors.address.message}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">City</label>
                <input
                  {...register("city", {
                    required: "Address is Required",
                    maxLength: {
                      value: 15,
                      message: "City cannot be more  than 15 characters",
                    },
                  })}
                  name="city"
                  type="text"
                  className="rounded py-2 px-2"
                />
                {errors.city && (
                  <div className="error text-danger">{errors.city.message}</div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">State</label>
                <input
                  {...register("state", {
                    required: "State is Required",
                    maxLength: {
                      value: 20,
                      message: "State cannot be more  than 20 characters",
                    },
                  })}
                  name="state"
                  type="text"
                  className="rounded py-2 px-2"
                />
                {errors.state && (
                  <div className="error text-danger">
                    {errors.state.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Zip Code</label>
                <input
                  {...register("zip", {
                    required: "Zip-Code  is Required",
                    maxLength: {
                      value: 10,
                      message: "Zip cannot be more than 10 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9\s\-]{3,10}$/,
                      message: "Invalid ZIP Code",
                    },
                  })}
                  name="zip"
                  type="text"
                  className="rounded py-2 px-2"
                />
                {errors.zip && (
                  <div className="error text-danger">{errors.zip.message}</div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="rounded px-3 py-2 mt-4"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
