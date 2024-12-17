import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import SearchPage from "../pages/SearchPage";
import ProfileSetup from "../pages/ProfileSetup";
import NewPatientDataForm from "../pages/NewPatientDataForm";
import NewEventDataForm from "../pages/NewEventDataForm";
import PatientRecord from "../pages/PatientRecord";
import EventRecord from "../pages/EventRecord"; 
import ProfilePage from "../pages/profilepage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/add-patient" element={<NewPatientDataForm />} />
        <Route path="/create-event" element={<NewEventDataForm />} />
        <Route path="/patientrecord" element={<PatientRecord />} />
        <Route path="/eventrecord" element={<EventRecord />} /> 
        <Route path="/profilepage" element={<ProfilePage />} /> 
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
