import React from "react";
import { FaMapMarkerAlt, FaCity, FaPhone, FaMapPin, FaBuilding } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-sky-100 to-white p-10 rounded-3xl shadow-2xl max-w-8xl mx-auto mt-20 border border-gray-200 space-y-6 md:space-y-0 md:space-x-16">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 relative w-full md:w-96">
        <img
          src="https://rehabcenters.com/wp-content/uploads/rehab-4.jpg"
          alt="Hospital"
          className="w-full h-full rounded-xl object-cover shadow-lg border-4 border-sky-500"
        />
        <span className="absolute bottom-4 left-4 bg-sky-500 text-white px-4 py-1 text-sm rounded-lg shadow-md">
          Verified
        </span>
      </div>

      {/* Right Side: Details */}
      <div className="ml-0 md:ml-16 mt-8 md:mt-0 flex-1">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-sky-700 mb-6">
          Serenity Addiction Hospital
        </h2>

        {/* Details with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-gray-700">
          <p className="flex items-center text-xl">
            <FaMapMarkerAlt className="text-sky-500 mr-4" />
            <span><strong>State:</strong> California</span>
          </p>
          <p className="flex items-center text-xl">
            <FaCity className="text-sky-500 mr-4" />
            <span><strong>City:</strong> Los Angeles</span>
          </p>
          <p className="flex items-center text-xl">
            <FaBuilding className="text-sky-500 mr-4" />
            <span><strong>Location:</strong> Downtown District</span>
          </p>
          <p className="flex items-center text-xl">
            <FaPhone className="text-sky-500 mr-4" />
            <span><strong>Phone:</strong> +1 234-567-890</span>
          </p>
          <p className="flex items-center text-xl">
            <FaMapPin className="text-sky-500 mr-4" />
            <span><strong>PIN Code:</strong> 90001</span>
          </p>
          <p className="flex items-center text-xl">
            <FaBuilding className="text-sky-500 mr-4" />
            <span><strong>Ownership:</strong> Private</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex space-x-6">
          <button className="bg-sky-500 text-white px-8 py-3 text-lg rounded-full shadow-md hover:bg-sky-600 hover:scale-105 transition">
            Event Data
          </button>
          <button className="bg-sky-500 text-white px-8 py-3 text-lg rounded-full shadow-md hover:bg-sky-600 hover:scale-105 transition">
            Patient Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
