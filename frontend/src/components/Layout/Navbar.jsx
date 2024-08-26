import React, { useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Context } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = (props) => {
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  


 
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/users/logout",
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        setIsAuthorized(false);    
        navigateTo("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode} mb-5`}>
      <div className="container-fluid ">
        <Link className="navbar-brand fw-bolder" to="/">
          RESUM<span style={{ color: "purple" }}>O</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/templates">
                Template
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button
              disabled={!isAuthorized}
              className="btn px-4"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              <Link
                className="text-white text-decoration-none"
                to="/personalinfo"
              >
                Start
              </Link>
            </button>

            {isAuthorized ?  (
          <div className="d-flex align-items-center">
            <button
              className="btn px-4 mx-2"
              onClick={handleLogout}
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Logout
            </button>
            <FaUser
              className={`mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            />
            <span
              className={`mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              
              {user?.firstName} {user?.lastName}
            </span>
            
          </div>
        ) : (
          <>
            <button
              className="btn px-4 mx-2"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              <Link className="text-white text-decoration-none" to="/login">
                Login
              </Link>
            </button>
            <button
              className="btn px-4"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              <Link className="text-white text-decoration-none" to="/register">
                Register
              </Link>
            </button>
          </>
        )}
            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              {props.mode === "light" ? (
                <img
                  src="brightness.png"
                  style={{ height: "22px" }}
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="dark.png"
                  style={{ height: "22px" }}
                  alt="Dark Mode"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;