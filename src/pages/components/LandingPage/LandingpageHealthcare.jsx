import React from "react";
import healthcareImage from "../../../assets/healthcare1.png";
import LandingPageService from "./LandingpageServices";
const LandingpageHealthcare = () => {
  return (
    <>
      <section className="bg-white py-20 md:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-start md:pr-8 text-center md:text-left md:ml-16 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold text-[#458FF6] mb-4">
              Leading Healthcare Providers
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Trafalgar provides progressive and affordable healthcare,
              accessible on mobile and online for everyone. To us, it's not just
              work. We take pride in the solutions we deliver.
            </p>
            <button className="bg-[#458FF6] text-white py-2 px-5 rounded-lg shadow hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={healthcareImage}
              alt="Healthcare Providers"
              className="w-3/4 md:w-full max-w-xs md:max-w-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingpageHealthcare;
