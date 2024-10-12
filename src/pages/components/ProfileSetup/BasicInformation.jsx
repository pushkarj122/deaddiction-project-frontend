import React from "react";

function BasicInformation({ formData, handleChange, errors }) {
  return (
    <div>
      <h4 className="text-blue-500 font-semibold text-lg mb-2">
        Basic Information
      </h4>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil
        explicabo obcaecati nemo consectetur ratione, eos ipsa blanditiis
        excepturi laudantium laboriosam doloremque soluta veritatis praesentium
        quam quo deleniti officia libero!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-gray-700 font-medium mb-2"
          >
            State*
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-gray-700 font-medium mb-2"
          >
            City*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2"
          >
            Location*
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone No*
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="pin" className="block text-gray-700 font-medium mb-2">
            PIN Code*
          </label>
          <input
            type="number"
            id="pin"
            name="pin"
            value={formData.pin || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
        </div>
      </div>
      <h4 className="text-blue-500 font-semibold text-lg mt-4 mb-2">
        Facility Type*
      </h4>
      {errors.facilityTypeRequired && (
        <p className="text-red-500 text-sm">{errors.facilityTypeRequired}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="residentialCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="residentialCheckbox"
              name="residential"
              checked={formData.residential || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Residential Facility</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="outpatientCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="outpatientCheckbox"
              name="outpatient"
              checked={formData.outpatient || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Outpatient Clinic</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="dayprogramCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="dayprogramCheckbox"
              name="dayprogram"
              checked={formData.dayprogram || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Day Program Center</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="detoxificationCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="detoxificationCheckbox"
              name="detoxification"
              checked={formData.detoxification || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Detoxification Center</span>
          </label>
        </div>
        <div className="mt-4">
          <label
            htmlFor="profilePhoto"
            className="block text-gray-700 font-medium mb-2"
          >
            Profile Photo URL*
          </label>
          <input
            type="url" // Use type="url" for URL input validation
            id="profilePhoto"
            name="profilePhoto"
            value={formData.profilePhoto || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.profilePhoto && (
            <p className="text-red-500 text-sm">{errors.profilePhoto}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
