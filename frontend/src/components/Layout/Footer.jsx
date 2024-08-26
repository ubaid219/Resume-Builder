import React from "react";

const Footer = (props) => {
  return (
    <div className="footer d-flex mx-5 p-5 mt-5 justify-content-between h-50">
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <h4>
          Resum<span style={{ color: "purple", font: "bolder" }}>o</span>
        </h4>
        <p>Updates right to your Inbox</p>
        <input
          className="px-3 py-2 "
          type="email"
          placeholder="Email"
          style={{ width: "250px", borderRadius: "10px" }}
        />
        <button
          style={{
            backgroundColor: "purple",
            color: "white",
            borderRadius: "20px",
          }}
          className="px-3 py-2 mx-2 mt-2"
        >
          Subscribe
        </button>
        <div
          className={`d-flex gap-4 mt-3 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <p>&copy; Resumo 2024</p> <p>Privacy policy</p> <p>Terms of use</p>
        </div>
      </div>
      <div
        className={`d-flex gap-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="d-block ">
          <h5>Our story</h5>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div>
          <h5>Services</h5>
          <p>Build Resume</p>
          <p>Template</p>
        </div>
        <div>
          <h5>About us</h5>
          <p>Developers</p>
          <p>Meet our team</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
