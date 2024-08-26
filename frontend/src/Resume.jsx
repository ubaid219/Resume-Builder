import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Context } from './main';
// import "./Resume.css"

const Resume = () => {
    const { personalInfo, educationInfo, contactInfo, experienceInfo, certificateInfo } = useContext(Context);
    const resumeRef = useRef();
  
    const handlePrint = useReactToPrint({
      content: () => resumeRef.current,
      documentTitle: 'Resume',
      onAfterPrint: () => console.log('Print successful!'),
    });
  
    return (
      <div>
        <div className="resume-container" ref={resumeRef}>
          {personalInfo && contactInfo && (
            <header className="header">
              <h1>
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <p>{personalInfo.profession}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.zip}</p>
  
              <div className="contact-info">
                <p>Email: {contactInfo.email}</p>
                <p>Phone: {contactInfo.phonenumber}</p>
              </div>
            </header>
          )}
          {educationInfo && (
            <section className="section">
              <h2>Education</h2>
              <div className="education-item">
                <h3>{educationInfo.course}</h3>
                <p>{educationInfo.institution}</p>
                <p>Start: {educationInfo.start}</p>
                {educationInfo.finish && <p>Finish: {educationInfo.finish}</p>}
                {educationInfo.currentlyStudying && <p>Till Now</p>}
              </div>
            </section>
          )}
          {experienceInfo && (
            <section className="section">
              <h2>Experience</h2>
              <div className="experience-item">
                <h3>{experienceInfo.position}</h3>
                <p>{experienceInfo.company}</p>
                <p>{experienceInfo.start}</p>
                {experienceInfo.finish && <p>{experienceInfo.finish}</p>}
                {experienceInfo.currentlyworking && <p>Till Now</p>}
              </div>
            </section>
          )}
          {certificateInfo && (
            <section className="section">
              <h2>Certifications</h2>
              <div className="certification-item">
                <p>{certificateInfo.organization}</p>
                <p>{certificateInfo.title}</p>
                <p>{certificateInfo.acquisition}</p>
                <p>{certificateInfo.skills}</p>
              </div>
            </section>
          )}
        </div>
        <button onClick={handlePrint} className="download-button btn btn-primary mt-5 " style={{marginLeft:"50%"}}>
          Download as PDF
        </button>
      </div>
    );
  };

export default Resume
