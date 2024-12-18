import React from "react";

const ProfileApproach = () => {
  const approaches = [
    {
      title: "Best Rehabilitation Center",
      description: "Recognized for outstanding recovery programs.",
    },
    {
      title: "Excellence in Mental Health Care",
      description: "Holistic treatment methods for mental health disorders.",
    },
    {
      title: "Accredited by National Boards",
      description: "Certified for quality healthcare services.",
    },
  ];

  return (
    <div className="bg-white p-8 mx-auto  mt-[50px] mb-[50px]   border border-sky-300">
      <div className=" mb-8">
        <h2 className="text-3xl font-semibold text-sky-700">Our Approach</h2>
        <p className="text-lg text-gray-600 mt-4">
          Learn more about our approach to recovery and wellness.
        </p>
      </div>

      <ul className="space-y-6">
        {approaches.map((approach, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 border-b border-sky-100"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-sky-700">
                {approach.title}
              </h3>
              <p className="text-gray-600 text-sm">{approach.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileApproach;
