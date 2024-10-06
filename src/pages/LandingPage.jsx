import React from "react";
import LandingpageTreatmentCenters from "./components/LandingPage/LandingpageTreatmentCenters";
import LandingpageNavbar from "../components/Navbar";
import LandingpageIntroSection from "./components/LandingPage/LandingpageIntroSection";
import LandingpageServices from "./components/LandingPage/LandingpageServices";
import LandingpageHealthcare from "./components/LandingPage/LandingpageHealthcare";
import LandingpageFooter from "../components/Footer";
import LandingPageFAQSection from "./components/LandingPage/LandingPageFAQSection";
const LandingPage = () => {
  return (
    <>
      <LandingpageNavbar />
      <LandingpageIntroSection />
      <LandingpageServices />
      <LandingpageHealthcare />
      <LandingpageTreatmentCenters />
      <LandingPageFAQSection />
      <LandingpageFooter />
    </>
  );
};

export default LandingPage;
