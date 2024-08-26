import React from 'react'
import "./styles.css"
const Body = (props) => {
  return (
    <>
         <div className="main">
        <div className="left">
          <p className="boost">BOOST YOUR CAREER CHASING</p>
          <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            Land your dream job with already made
          </h3>
          <h3 className="purple">Eye-catching Resume.</h3>
          <p className="small">
            Create awesome resumes with one of our templates in just a few
            seconds.
          </p>
          <button className="create">Create Resume for free</button>
        </div>
        <div className="right">
          <img
            src="cv.jpeg"
            className="cv"
            style={{ height: "400px" }}
            alt="CV"
          />
          <div
            className="card position-absolute bg-white p-3 "
            style={{
              width: "200px",
              height: "250px",
              top: "70px",
              left: "-70px",
            }}
          >
            <img
              src="man.png"
              className="card-img-top mb-2"
              alt="..."
            />
            <h5 className="card-title">John McMiller</h5>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Body
