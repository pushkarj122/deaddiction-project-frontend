import React from "react";
import {
  FaWineGlassAlt,
  FaPills,
  FaBrain,
  FaHeart,
  FaSmile,
  FaSadTear,
} from "react-icons/fa";

const ProfileSpecializations = () => {
  const specializations = [
    {
      icon: <FaWineGlassAlt />,
      title: "Alcohol Addiction",
      description:
        "Comprehensive recovery plans for overcoming alcohol dependency.",
    },
    {
      icon: <FaPills />,
      title: "Drug Addiction",
      description:
        "Tailored treatments to help break free from drug addiction.",
    },
    {
      icon: <FaBrain />,
      title: "Behavioural Addiction",
      description:
        "Support for overcoming addictive behaviors like gambling and gaming.",
    },
    {
      icon: <FaHeart />,
      title: "Mental Health Treatment",
      description:
        "Holistic care for a wide range of mental health challenges.",
    },
    {
      icon: <FaSmile />,
      title: "Anxiety",
      description:
        "Specialized therapies to reduce stress and manage anxiety effectively.",
    },
    {
      icon: <FaSadTear />,
      title: "Depression",
      description:
        "Personalized care to combat depression and restore well-being.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-sky-100 to-white p-10  max-w-8xl mx-auto border-2 border-sky-200 mt-[50px] mb-[50px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-sky-700 mb-6">
          Profile Specializations
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore our areas of expertise designed to cater to your unique needs
          and ensure personalized care for all our patients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {specializations.map((spec, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center text-center border-2 border-sky-200"
          >
            <div className="text-sky-500 text-6xl mb-4">{spec.icon}</div>
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {spec.title}
            </h3>
            <p className="text-base text-gray-600">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSpecializations;
