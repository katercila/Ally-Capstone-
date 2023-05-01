import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import Volunteer from "./components/Volunteer"
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";





function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router> 
    
  );
}

export default App;

//check if they're auth if they are route to user page 
//