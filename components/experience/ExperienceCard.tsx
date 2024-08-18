import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  List,
  ListItem,
} from "@mui/material";

interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceCard({
  jobTitle,
  companyName,
  companyLogo,
  companyWebsite,
  duration,
  responsibilities,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="bg-gray-800 text-white rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row items-center p-4">
        <Link
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <CardMedia
            component="img"
            image={companyLogo}
            alt={`${companyName} logo`}
            className="w-20 h-20 md:w-24 md:h-24 mr-4"
          />
        </Link>
        <div>
          <Typography variant="h5" className="text-white font-bold">
            {jobTitle}
          </Typography>
          <Link
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Typography
              variant="body1"
              className="text-blue-400 mt-1 md:mt-0 text-lg md:text-xl hover:underline"
            >
              {companyName}
            </Typography>
          </Link>
          <Typography variant="body2" className="text-gray-400 mt-1 md:mt-0">
            {duration}
          </Typography>
        </div>
      </div>
      <CardContent className="px-4 py-2">
        <List className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <ListItem key={index} className="text-gray-300 p-0">
              {responsibility}
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" className="mt-4 text-gray-400">
          Technologies used:
        </Typography>
        <div className="flex flex-wrap mt-2 space-x-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
              <span className="text-gray-300 text-sm md:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
