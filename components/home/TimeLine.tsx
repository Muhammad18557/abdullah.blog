import React from "react";

const timelineData = [
  {
    date: "July 2002",
    location: "Pakistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  },
  {
    date: "August 2021",
    location: "Singapore",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  },
  {
    date: "September 2022",
    location: "Malaysia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  },
  {
    date: "July 2023",
    location: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    date: "August 2023",
    location: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    date: "December 2023",
    location: "Saudi Arabia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
  },
  {
    date: "February 2024",
    location: "UK",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
];

export default function TimeLine() {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Where I have been</h1>
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
            <div className="w-5/12 p-4 bg-gray-800 rounded-lg shadow-md flex items-center">
              <img
                src={item.flag}
                alt={`${item.location} flag`}
                className="w-8 h-8 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{item.date}</h3>
                <p className="text-gray-400">{item.location}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
