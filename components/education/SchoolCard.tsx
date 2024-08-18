import React from "react";
import { Card, CardContent, Typography, Avatar, List, ListItem, Link } from "@mui/material";

interface SchoolCardProps {
  schoolName: string;
  logo: string;
  link: string;
  programName: string;
  duration: string;
  description: string;
  activities?: string[];
}

export default function SchoolCard({
  schoolName,
  logo,
  link,
  programName,
  duration,
  description,
  activities,
}: SchoolCardProps) {
  return (
    <Card className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden mb-6">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center">
          <Link href={link} target="_blank" rel="noopener" className="flex items-center mr-4">
            <Avatar
              src={logo}
              alt={`${schoolName} logo`}
              className="w-20 h-20 md:w-28 md:h-28 mr-4"
            />
          </Link>
          <div className="text-center md:text-left">
            <Link href={link} target="_blank" rel="noopener" className="no-underline">
              <Typography variant="h5" component="div" className="text-white hover:underline">
                {schoolName}
              </Typography>
            </Link>
            <Typography variant="body1" color="primary" className="text-blue-400 mt-2 md:mt-0 text-lg md:text-xl">
              {programName}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="text-gray-400">
              {duration}
            </Typography>
          </div>
        </div>
        <Typography variant="body1" className="mt-4 text-white">
          {description}
        </Typography>
        {activities && (
          <List className="mt-4 space-y-1">
            {activities.map((activity, index) => (
              <ListItem key={index} className="p-0 text-gray-400">
                {activity}
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}
