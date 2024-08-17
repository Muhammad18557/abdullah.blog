import React from "react";
import { Card, CardContent, CardMedia, Typography, Avatar, List, ListItem, Link } from "@mui/material";

interface SchoolCardProps {
  schoolName: string;
  logo: string;
  link: string;
  programName: string;
  duration: string;
  description: string;
  activities?: string[]; // Optional prop
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
        <div className="flex items-center">
          <Avatar src={logo} alt={`${schoolName} logo`} className="w-16 h-16 mr-4" />
          <div>
            <Typography variant="h5" component="div" className="text-white">
              {schoolName}
            </Typography>
            <Typography variant="body2" color="primary" className="text-blue-400">
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
          <List className="mt-4">
            {activities.map((activity, index) => (
              <ListItem key={index} className="p-0 text-gray-400">
                {activity}
              </ListItem>
            ))}
          </List>
        )}
        <Link href={link} target="_blank" rel="noopener" className="text-blue-500 hover:underline mt-4 inline-block">
          Visit Website
        </Link>
      </CardContent>
    </Card>
  );
}
