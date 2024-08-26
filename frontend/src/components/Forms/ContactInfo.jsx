import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../main";
import toast from "react-hot-toast";

const ContactInfo = () => {
    const { setContactInfo } = useContext(Context);
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      
      setContactInfo(data);
      toast.success("Details Submitted");
      navigate("/certification");
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
            <h3>Contact Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Email Address</label>
                  <input
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email",
                      },
                    })}
                    name="email"
                    type="text"
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
                  <label className="fw-bold">Phone Number</label>
                  <input
                    {...register("phonenumber", {
                      required: "Phone Number is Required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    name="phonenumber"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                  {errors.phonenumber && (
                    <div className="error text-danger">
                      {errors.phonenumber.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">LinkedIn Profile Link</label>
                  <input
                    {...register("linkedIn", {
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                        message: "Please enter a valid Link",
                      },
                    })}
                    name="linkedIn"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                  {errors.linkedIn && (
                    <div className="error text-danger">
                      {errors.linkedIn.message}
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Twitter Profile Link</label>
                  <input
                    {...register("twitter", {
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                        message: "Please enter a valid Link",
                      },
                    })}
                    name="twitter"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                  {errors.twitter && (
                    <div className="error text-danger">
                      {errors.twitter.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Instagram Profile Link</label>
                  <input
                   {...register("instagram", {
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                      message: "Please enter a valid Link",
                    },
                  })}
                  name="instagram"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                    {errors.instagram && (
                    <div className="error text-danger">
                      {errors.instagram.message}
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">Portfolio Link</label>
                  <input
                   {...register("portfolio", {
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                      message: "Please enter a valid Link",
                    },
                  })}
                  name="portfolio"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                    {errors.portfolio && (
                    <div className="error text-danger">
                      {errors.portfolio.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-3">
                  <label className="fw-bold">GitHub Profile Link</label>
                  <input
                   {...register("giuthub", {
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                      message: "Please enter a valid Link",
                    },
                  })}
                  name="github"
                    type="text"
                    className="rounded py-2 px-2"
                    style={{ width: "300px" }}
                  />
                   {errors.github && (
                    <div className="error text-danger">
                      {errors.github.message}
                    </div>
                  )}
                </div>
              </div>
  
              <button
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
  

export default ContactInfo
