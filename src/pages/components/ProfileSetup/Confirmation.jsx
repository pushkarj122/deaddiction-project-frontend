import React from "react";

function Confirmation({ formData, handleSubmit }) {
  return (
    <div>
      <h4 className="text-blue-500 font-semibold text-lg mb-2">Confirmation</h4>
      <p className="text-gray-600 mb-4">
        Please review the information below and click Submit to complete your
        profile setup.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>State:</strong> {formData.state}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Phone No:</strong> {formData.phone}
          </p>
          <p>
            <strong>PIN Code:</strong> {formData.pin}
          </p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-6"
      >
        Submit
      </button>
    </div>
  );
}

export default Confirmation;
