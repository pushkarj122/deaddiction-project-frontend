import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "./components/ProfilePage/ProfileCard";
import ProfileDescription from "./components/ProfilePage/ProfileDescription";
import ProfileSpecializations from "./components/ProfilePage/ProfileSpecializations";
import Footer from "../components/Footer";
import ProfileProgram from "./components/ProfilePage/ProfileProgram";
import ProfileApproach from "./components/ProfilePage/ProfileApproach";
const Profilepage = () => {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <ProfileDescription />
      <ProfileSpecializations />
      <ProfileProgram />
      <ProfileApproach />
      <Footer />
    </>
  );
};

export default Profilepage;
