import React from "react";
import {
  FaMapMarkerAlt,
  FaCity,
  FaPhone,
  FaMapPin,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-sky-100 to-white p-10 rounded-1xl max-w-8xl mx-auto mt-20 space-y-6 md:space-y-0 md:space-x-16 border border-sky-300 shadow-lg">
      <div className="flex-shrink-0 relative w-full md:w-96">
        <img
          src="https://rehabcenters.com/wp-content/uploads/rehab-4.jpg"
          alt="Hospital"
          className="w-full h-full rounded-xl object-cover shadow-lg border-2 border-sky-500"
        />
        
      </div>
      <div className="ml-0 md:ml-16 mt-8 md:mt-0 flex-1">
        <h2 className="text-3xl font-semibold text-sky-700 mb-6">
          Serenity Addiction Hospital
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-gray-700">
          <p className="flex items-center text-lg">
            <FaMapMarkerAlt className="text-sky-500 mr-4" />
            <span>
              <strong>State:</strong> California
            </span>
          </p>
          <p className="flex items-center text-lg">
            <FaCity className="text-sky-500 mr-4" />
            <span>
              <strong>City:</strong> Los Angeles
            </span>
          </p>
          <p className="flex items-center text-lg">
            <FaBuilding className="text-sky-500 mr-4" />
            <span>
              <strong>Location:</strong> Downtown District
            </span>
          </p>
          <p className="flex items-center text-lg">
            <FaPhone className="text-sky-500 mr-4" />
            <span>
              <strong>Phone:</strong> +1 234-567-890
            </span>
          </p>
          <p className="flex items-center text-lg">
            <FaMapPin className="text-sky-500 mr-4" />
            <span>
              <strong>PIN Code:</strong> 90001
            </span>
          </p>
          <p className="flex items-center text-lg">
            <FaEnvelope className="text-sky-500 mr-4" />
            <span>
              <strong>Email:</strong> info@serenityhospital.com
            </span>
          </p>
        </div>
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
