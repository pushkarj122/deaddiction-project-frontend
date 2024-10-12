import React, { useState, useEffect } from "react";
import pharmacyCard from "../../../assets/Pharmacycard.png";
import emgCard4 from "../../../assets/EmgCard4.png";
import trackingCard5 from "../../../assets/Trackingcard5.png";
import LandingpageFAQSection from "./LandingpageFAQSection";
import LandingpageFooter from "../../../components/Footer";

const TreatmentCenters = () => {
  const slides = [
    {
      img: pharmacyCard,
      location: "India",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, ducimus.",
      cost: "From $500",
    },
    {
      img: emgCard4,
      location: "Location 2",
      description: "Description for location 2.",
      cost: "From $600",
    },
    {
      img: trackingCard5,
      location: "Location 3",
      description: "Description for location 3.",
      cost: "From $700",
    },
    {
      img: emgCard4,
      location: "Location 4",
      description: "Description for location 4.",
      cost: "From $800",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row bg-blue-50 py-16">
        <div className="w-full md:w-1/2 pr-8 pl-10 md:ml-10 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Treatment Centres
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            UKAT is renowned for its exceptional addiction treatment centres,
            offering luxury private rehab facilities in tranquil settings by the
            seaside, rural countryside, or peaceful villages. Each location is
            meticulously selected to create an ideal environment supporting
            recovery. Our commitment to delivering outstanding care and
            rehabilitation is unwavering, with a strong focus on achieving
            long-term recovery.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[90%] md:w-[500px] mx-auto rounded-lg overflow-hidden shadow-lg relative">
            <img
              src={slides[currentSlide].img}
              alt={slides[currentSlide].location}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
              <p className="font-bold">{slides[currentSlide].cost}</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl md:text-2xl text-white">
                {slides[currentSlide].location}
              </h1>
              <p className="text-white text-center px-2">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentCenters;
