import React from "react";

function TreatmentInformation({ formData, handleChange, errors }) {
  return (
    <div>
      <h4 className="text-blue-500 font-semibold text-lg mb-2">
        Treatment Information
      </h4>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus at
        repellat harum fugiat mollitia facere vero blanditiis ullam sequi,
        aspernatur, dignissimos nihil nulla voluptatem eligendi asperiores sit
        reiciendis doloremque. Eos.
      </p>
      <h4 className="text-blue-500 font-semibold text-lg mb-2">
        Specializations
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="alchoholCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="alchoholCheckbox"
              name="alchohol"
              checked={formData.alchohol || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Alcohol Addiction</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="drugCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="drugCheckbox"
              name="drug"
              checked={formData.drug || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Drug Addiction</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="behaviouralCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="behaviouralCheckbox"
              name="behavioural"
              checked={formData.behavioural || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Behavioural Addiction</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="mentalCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="mentalCheckbox"
              name="mental"
              checked={formData.mental || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Mental Health Treatment</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="anxietyCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="anxietyCheckbox"
              name="anxiety"
              checked={formData.anxiety || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Anxiety</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="depressionCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="depressionCheckbox"
              name="depression"
              checked={formData.depression || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Depression</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="teenCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="teenCheckbox"
              name="teen"
              checked={formData.teen || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Teen and Adolescent Services
            </span>
          </label>
        </div>
        <div>
          <label
            htmlFor="familyCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="familyCheckbox"
              name="family"
              checked={formData.family || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Family Centered Treatments
            </span>
          </label>
        </div>
        <div>
          <label
            htmlFor="genderCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="genderCheckbox"
              name="gender"
              checked={formData.gender || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Gender Specific Programs</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="cultureCheckbox"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="cultureCheckbox"
              name="culture"
              checked={formData.culture || false}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Culture Specific Programs
            </span>
          </label>
        </div>
        <div>
          <label
            htmlFor="approach"
            className="block text-gray-700 font-medium mb-2"
          >
            Treatment Approaches*
          </label>
          <input
            type="text"
            id="approach"
            name="approach"
            value={formData.approach || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.approach && (
            <p className="text-red-500 text-sm">{errors.approach}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="programs"
            className="block text-gray-700 font-medium mb-2"
          >
            Treatment Programs*
          </label>
          <input
            type="text"
            id="programs"
            name="programs"
            value={formData.programs || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.programs && (
            <p className="text-red-500 text-sm">{errors.programs}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TreatmentInformation;
