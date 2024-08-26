import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthorized: false,
  setIsAuthorized: () => {},
  user: null,
  setUser: () => {},
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState(null);
  const [experienceInfo, setExperienceInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [certificateInfo, setCertificateInfo] = useState(null);

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
        personalInfo,
        setPersonalInfo,
        educationInfo,
        setEducationInfo,
        experienceInfo,
        setExperienceInfo,
        contactInfo,
        setContactInfo,
        certificateInfo,
        setCertificateInfo,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);
