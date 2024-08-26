import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios"; 
import { Context } from "./main";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PersonalInfo from "./components/Forms/PersonalInfo";
import Education from "./components/Forms/Education";
import Experience from "./components/Forms/Experience";
import ContactInfo from "./components/Forms/ContactInfo";
import Certification from "./components/Forms/Certification";
import TemplateSelector from "./components/templates/TemplateSelector";
import AboutUs from "./components/Home/AboutUs";
import TemplateDisplay from "./components/templates/TemplateDisplay";

const App = () => {
  const { setIsAuthorized, setUser } = useContext(Context);
  const [mode, setMode] = useState("light");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/users/getUser",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setUser(response.data.data);
        setIsAuthorized(true);
      }
    } catch (error) {
      setIsAuthorized(false);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [setIsAuthorized, setUser]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/login" element={<Login fetchUser={fetchUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/personalinfo" element={<PersonalInfo/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contactinfo" element={<ContactInfo/>} />
          <Route path="/certification" element={<Certification/>} />          
          <Route path="/template" element={<TemplateSelector mode={mode}/>} />
          <Route path="/templates" element={<TemplateDisplay/>} />
         
        </Routes>
        <Footer mode={mode} />
        <Toaster />
      </Router>
    </>
  );
};

export default App;
