import { useContext } from "react";
import {  useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../main";
import toast from "react-hot-toast";

const Education = () => {
  const { setEducationInfo } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    setEducationInfo(data);
    toast.success("Details Submitted");
    navigate("/experience");
  };
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Watch the checkbox state
  const currentlyStudying = watch("currentlyStudying", false);

  return (
    <>
      
      <div className="body d-flex m-5 p-3 justify-content-around">
        <div className="left bg-white w-25 shadow p-4 d-flex gap-5 pt-5 flex-column rounded-4">
        <Link className="btn  text-decoration-none text-black" style={{backgroundColor:"white",border:"2px solid black"}} to="/personalinfo">
            Personal Information
          </Link>
          <Link className="btn  text-decoration-none text-black" style={{backgroundColor:"white",border:"2px solid black"}} to="/education">
            Education
          </Link>
          <Link className="btn  text-decoration-none text-black" style={{backgroundColor:"white",border:"2px solid black"}} to="/experience">
            Experience
          </Link>
          <Link className="btn  text-decoration-none text-black" style={{backgroundColor:"white",border:"2px solid black"}} to="/contactinfo">
            Contact Information
          </Link>
          <Link className="btn  text-decoration-none text-black" style={{backgroundColor:"white",border:"2px solid black"}} to="/certification">
            Award/Certification
          </Link>
        </div>
        <div className="right bg-white w-50 shadow p-4 rounded-4">
          <h3>Education</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Institution Name</label>
                <input
                  {...register("institution", {
                    required: "Institution Name is Required",
                  })}
                  name="institution"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.institution && (
                  <div className="error text-danger">
                    {errors.institution.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Course</label>
                <input
                  {...register("course", {
                    required: "Course Name is Required",
                  })}
                  name="course"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.course && (
                  <div className="error text-danger">
                    {errors.course.message}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Country</label>
                <input
                  {...register("country", {
                    required: "Country is Required",
                    maxLength: {
                      value: 15,
                      message: "Max 15 characters",
                    },
                  })}
                  name="country"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.country && (
                  <div className="error text-danger">
                    {errors.country.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">State</label>
                <input
                  {...register("state", {
                    required: "State is Required",
                    maxLength: {
                      value: 20,
                      message: "State cannot be more than 20 characters",
                    },
                  })}
                  name="state"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.state && (
                  <div className="error text-danger">
                    {errors.state.message}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Time Period</label>
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column">
                    <label className="mt-2" htmlFor="start">
                      Start
                    </label>
                    <input
                      {...register("start", {
                        required: "Start Date is Required",
                        validate: value =>
                          value <= getTodayDate() || "Start Date cannot be in the future",
                      })}
                      name="start"
                      type="date"
                      className="rounded px-3 mt-2"
                    />
                    {errors.start && (
                      <div className="error text-danger">
                        {errors.start.message}
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="mt-2" htmlFor="finish">
                      Finish
                    </label>
                    <input
                      {...register("finish", {
                        validate: (value) =>
                          currentlyStudying || value
                            ? true
                            : "Finish Date is Required",
                      })}
                      name="finish"
                      type="date"
                      className="rounded px-3 mt-2 "
                      disabled={currentlyStudying}
                    />
                    {errors.finish && (
                      <div className="error text-danger">
                        {errors.finish.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-3">
                <input
                name="currentlyStudying"
                  type="checkbox"
                  className="mx-2 "
                  {...register("currentlyStudying")}
                />
                <label className="fw-bold">Currently Studying Here</label>
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

export default Education;
