import React from "react";
import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceData = [
  {
    id: 1,
    jobTitle: "Software Engineering Intern",
    companyName: "Defog AI",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C560BAQHN9MH3RYt2cw/company-logo_200_200/company-logo_200_200/0/1669630325719/data_narratives_logo?e=2147483647&v=beta&t=G5DdtanbGXEUQAViPBWK6I66WGcvejafnZXuzmLQB-E",
    companyWebsite: "https://defog.ai/",
    duration: "July 2024 - Present",
    responsibilities: [
      "Developed and optimized backend services using FastAPI.",
      "Implemented authentication and authorization with JWT tokens.",
      "Worked on containerization using Docker and deployment on Google Cloud.",
    ],
    technologies: ["FastAPI", "Docker", "Next.js", "PostgreSQL"],
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
      "Built and deployed several full-stack applications for clients.",
      "Implemented responsive UI designs with React and Tailwind CSS.",
      "Managed databases using PostgreSQL and MongoDB.",
    ],
    technologies: ["Python", "Typescript", "Supabase with Postgis"],
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
