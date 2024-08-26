import { useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../main";
import { useContext } from "react";
import toast from "react-hot-toast";

const Experience = () => {
  const { setExperienceInfo } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    setExperienceInfo(data);
    toast.success("Details Submitted");
    navigate("/contactinfo");
  };

  const currentlyWorking = watch("currentlyWorking", false);


  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

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
          <h3>Experience</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Employer</label>
                <input
                  {...register("employer", {
                    required: "Employer Name is Required",
                  })}
                  name="employer"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.employer && (
                  <div className="error text-danger">{errors.employer.message}</div>
                )}
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Company</label>
                <input
                  {...register("company", {
                    required: "Company Name is Required",
                  })}
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.company && (
                  <div className="error text-danger">{errors.company.message}</div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Address</label>
                <input
                  {...register("address")}
                  name="address"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="d-flex flex-column my-3">
                <label className="fw-bold">Role/Position</label>
                <input
                  {...register("position", {
                    required: "Position is Required",
                  })}
                  name="position"
                  type="text"
                  className="rounded py-2 px-2"
                  style={{ width: "300px" }}
                />
                {errors.position && (
                  <div className="error text-danger">{errors.position.message}</div>
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
                      type="date"
                      className="rounded px-3 mt-2 px-2"
                    />
                    {errors.start && (
                      <div className="error text-danger">{errors.start.message}</div>
                    )}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="mt-2" htmlFor="finish">
                      Finish
                    </label>
                    <input
                      {...register("finish", {
                        validate: value =>
                          currentlyWorking || value
                            ? true
                            : "Finish Date is Required",
                      })}
                      name="currentlyworking"
                      type="date"
                      className="rounded px-3 mt-2"
                      disabled={currentlyWorking}
                    />
                    {errors.finish && (
                      <div className="error text-danger">{errors.finish.message}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-3">
                <input
                  {...register("currentlyWorking")}
                  name="currentlyWorking"
                  type="checkbox"
                  className="mx-2"
                />
                <label className="fw-bold">Currently Work Here</label>
              </div>
            </div>
            <div className="d-flex flex-column my-3">
              <label className="fw-bold">Description</label>
              <textarea
                {...register("textarea", {
                  maxLength: {
                    value: 200,
                    message: "Description must not be more than 200 characters",
                  },
                })}
                className="form-control border-black"
                rows="5"
              ></textarea>
              {errors.textarea && (
                <div className="error text-danger">{errors.textarea.message}</div>
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

export default Experience;
