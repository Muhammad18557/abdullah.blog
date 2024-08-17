import React from "react";

const timelineData = [
  {
    date: "2002",
    location: "Born in Pakistan",
  },
  {
    date: "2021",
    location: "Singapore",
  },
  {
    date: "2022",
    location: "Malaysia",
  },
  {
    date: "July 2023",
    location: "Canada",
  },
  {
    date: "August 2023",
    location: "USA",
  },
  {
    date: "December 2023",
    location: "Saudi Arabia",
  },
  {
    date: "February 2024",
    location: "UK",
  },
];

export default function TimeLine() {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Location</h1>
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-8`}
          >
            {/* Content */}
            <div className="w-5/12 p-4 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{item.date}</h3>
              <p className="text-gray-400">{item.location}</p>
            </div>

            {/* Dot */}
            <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
