import React from "react";
import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceData = [
  {
    id: 1,
    jobTitle: "Software Engineering Intern",
    companyName: "Defog AI (YC W23)",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C560BAQHN9MH3RYt2cw/company-logo_200_200/company-logo_200_200/0/1669630325719/data_narratives_logo?e=2147483647&v=beta&t=G5DdtanbGXEUQAViPBWK6I66WGcvejafnZXuzmLQB-E",
    companyWebsite: "https://defog.ai/",
    duration: "July 2024 - Present",
    responsibilities: [
      "Revamped the Next.js frontend of defog self hosted platform to improve user experience and performance.",
      "Implemented recommendation features that use past negative feedback to suggest tailored improvements to users.",
      "Used Slack's API to prompt and receive feedback through the company's slack app and allow asking of follow up questions via slack threads.",
    ],
    technologies: [
      {
        name: "FastAPI",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oVNdno5liQUIAEEjqei4QV_Gsih-RWGcOA&s",
      },
      {
        name: "Next.js",
        logo: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      },
      {
        name: "Docker",
        logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png",
      },
      {
        name: "PostgreSQL",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmnFYeOmmAlNV9_ZTu5cYgS2L55Q1pt9QyA&s",
      },
    ],
  },
  {
    id: 2,
    jobTitle: "GIS Software Engineering Intern",
    companyName: "Nika Eco",
    companyLogo:
      "https://media.licdn.com/dms/image/D560BAQF80-8sYdU28g/company-logo_200_200/0/1699427432526/nika_eco_logo?e=2147483647&v=beta&t=kiFW7h3U7PjNrDu2t2ZhFodPWixzLm9v4VnLNOAtRwY",
    companyWebsite: "https://nika.eco/",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Handled the entire backend feature for geospatial file uploading, ensuring files (.shp, .kml, .geojson, .gkpg) are parsed correctly with a standardized format across different software platforms (e.g., QGIS, Google Earth Pro, ArcGIS).",
      "Implemented a custom kml to geojson converter using lxml in Python to support nested multigeometry tags in KML, which the existing kml2geojson library does not support.",
      "Unit-tested the entire feature using pytest to cover all edge cases of malformed geospatial files comprehensively.",
      "Researched and implemented the best methods for storing and analyzing raster data using PostGIS raster and Rasterio.",
    ],
    technologies: [
      {
        name: "Python",
        logo: "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp",
      },
      {
        name: "TypeScript",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxCV99P8R4ce4ODXn7S7qKToZbYPLOyJJjg&s",
      },
      {
        name: "Supabase",
        logo: "https://miro.medium.com/v2/resize:fit:1400/0*QzPzYLTNRX7p5Rsl",
      },
    ],
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <div className="space-y-8">
        {experienceData.map((experience) => (
          <ExperienceCard
            key={experience.id}
            jobTitle={experience.jobTitle}
            companyName={experience.companyName}
            companyLogo={experience.companyLogo}
            companyWebsite={experience.companyWebsite}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </div>
  );
}
