import React from "react";
import Intro from "../../../assets/LandingPageImage/intro.png";


const LandingpageIntroSection = () => {
  return (
    <>
      
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-lg shadow-md bg-white">
        <div className="md:w-1/2 mb-8 ml-12 md:mb-0 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#458FF6]">
            Virtual Healthcare
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
            For You
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Trafalgar provides progressive and affordable healthcare, accessible
            on mobile and online for everyone.
          </p>
          <button className="bg-[#458FF6] text-white py-2 px-5 rounded-lg shadow hover:bg-blue-600 transition">
            Consult Today
          </button>
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          <img
            src={Intro}
            alt="Virtual Healthcare"
            className="mt-4 w-full h-auto rounded-lg md:w-3/4 object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default LandingpageIntroSection;
