import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../main";
import { useReactToPrint } from "react-to-print";
import ProfessionalClassicTemplate from "./ProfessionalClassicTemplate ";
import ModernMinimalistTemplate from "./ModernMinimalistTemplate ";
import CreativeDesignerTemplate from "./CreativeDesignerTemplate ";

const TemplateSelector = (props) => {
  const {
    personalInfo,
    educationInfo,
    contactInfo,
    experienceInfo,
    certificateInfo,
  } = useContext(Context);

  const [selectedTemplate, setSelectedTemplate] = useState("modern-minimalist"); // Set a default template
  const [templateComponent, setTemplateComponent] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handlePrint = useReactToPrint({
    content: () => {
      return templateComponent;
    },
    documentTitle: "Resume",
    onAfterPrint: () => console.log("Print successful!"),
  });

  // Update the template component whenever selectedTemplate changes
  useEffect(() => {
    switch (selectedTemplate) {
      case "modern-minimalist":
        setTemplateComponent(
          <ModernMinimalistTemplate
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            contactInfo={contactInfo}
            experienceInfo={experienceInfo}
            certificateInfo={certificateInfo}
          />
        );
        break;
      case "professional-classic":
        setTemplateComponent(
          <ProfessionalClassicTemplate
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            contactInfo={contactInfo}
            experienceInfo={experienceInfo}
            certificateInfo={certificateInfo}
          />
        );
        break;
      case "creative-designer":
        setTemplateComponent(
          <CreativeDesignerTemplate
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            contactInfo={contactInfo}
            experienceInfo={experienceInfo}
            certificateInfo={certificateInfo}
          />
        );
        break;
      default:
        setTemplateComponent(null);
    }
  }, [selectedTemplate]);

  return (
    <div className="container mt-5">
      <h2
        className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}
        style={{ marginTop: "100px" }}
      >
        Select a Template
      </h2>
      <div className="template-options m-5">
        <button
          className="btn px-4 mx-2"
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => handleTemplateSelect("modern-minimalist")}
        >
          Modern Minimalist
        </button>
        <button
          className="btn px-4 mx-2"
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => handleTemplateSelect("professional-classic")}
        >
          Professional Classic
        </button>
        <button
          className="btn px-4 mx-2"
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => handleTemplateSelect("creative-designer")}
        >
          Creative Designer
        </button>
      </div>
      {templateComponent && (
        <div>
          <h2>Preview</h2>
          <div className="preview">
            {templateComponent}
          </div>
          <button
            onClick={handlePrint}
            className="download-button btn btn-primary mt-5"
            style={{ marginLeft: "50%" }}
          >
            Download Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
