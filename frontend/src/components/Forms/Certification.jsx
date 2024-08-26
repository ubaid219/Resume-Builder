import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../main";
import toast from "react-hot-toast";

const Certification = () => {
  const { setCertificateInfo } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    setCertificateInfo(data);
    toast.success("Details Submitted");
    navigate("/template");
  };
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
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
          <h3>Award/Certification</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold"> Name of Organization</label>
                <input
                  {...register("organization", {
                    required: "Name of Organization is required",
                  })}
                  name="organization"
                  type="text"
                  className="rounded px-2 py-2"
                  style={{ width: "500px" }}
                />
              </div>
              {errors.organization && (
                <div className="error text-danger">
                  {errors.organization.message}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Award Title </label>
                <input
                  {...register("title", {
                    required: "Award Title is required",
                  })}
                  name="title"
                  type="text"
                  className="rounded px-2 py-2"
                  style={{ width: "300px" }}
                />
                {errors.title && (
                  <div className="error text-danger">
                    {errors.title.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3 mx-5">
                <label className="fw-bold">Date of Acquisition</label>
                <input
                  {...register("acquisition", {
                    required: "A date is Required",
                    validate: (value) =>
                      value <= getTodayDate() ||
                      "Start Date cannot be in the future",
                  })}
                  name="acquisition"
                  type="date"
                  className="rounded px-2 py-2"
                />
                {errors.acquisition && (
                  <div className="error text-danger">
                    {errors.acquisition.message}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex flex-column my-3">
              <label className="fw-bold">Skills</label>
              <textarea
                {...register("skills", {
                  required: "Skills are required",
                })}
                name="skills"
                className="form-control border-black"
                rows="5"
              ></textarea>
              {errors.skills && (
                <div className="error text-danger">{errors.skills.message}</div>
              )}
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

export default Certification;
