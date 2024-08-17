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
      <div className="flex items-center p-4">
        <CardMedia
          component="img"
          image={companyLogo}
          alt={`${companyName} logo`}
          className="w-16 h-16 mr-4"
        />
        <div>
          <Typography variant="h5" className="text-white font-semibold">
            {jobTitle}
          </Typography>
          <Typography variant="body1" className="text-blue-400">
            {companyName}
          </Typography>
          <Link
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </Link>
        </div>
      </div>
      <CardContent>
        <Typography variant="body2" className="text-gray-400">
          {duration}
        </Typography>
        <List className="mt-4">
          {responsibilities.map((responsibility, index) => (
            <ListItem key={index} className="text-gray-300 p-0">
              {responsibility}
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" className="mt-4 text-gray-400">
          Technologies used:{" "}
          <span className="text-gray-300">{technologies.join(", ")}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
