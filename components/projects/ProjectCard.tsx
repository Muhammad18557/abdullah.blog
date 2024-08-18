"use client";
import React from "react";
import { Card, CardContent, Typography, Link, Button } from "@mui/material";

interface ProjectCardProps {
  title: string;
  githubLink: string;
  demoLink?: string;
  year: string;
  description: string;
  technologies: string[];
  image: string; // Image of the project
}

export default function ProjectCard({
  title,
  githubLink,
  demoLink,
  year,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <div
      className="relative w-96 h-80 perspective"
      style={{ perspective: "1000px" }} // perspective for 3D effect
    >
      <div
        className="relative w-full h-full duration-500"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.5s",
        }}
      >
        {/* Front of the card */}
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <Card
            className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden"
            style={{ height: "100%" }}
          >
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <CardContent>
              <Typography variant="h5" className="text-white font-bold">
                {title}
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                {year}
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            className="bg-gray-800 text-white rounded-lg shadow-md p-4"
            style={{ height: "100%" }}
          >
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                {/* Description Section */}
                <Typography
                  variant="body1"
                  className="text-gray-300 mb-4"
                  style={{
                    minHeight: "4rem",
                    maxHeight: "9rem",
                    overflowY: "auto",
                  }}
                >
                  {description}
                </Typography>
              </div>

              {/* Buttons and Technologies */}
              <div>
                <div className="flex space-x-4 mb-4">
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" color="primary">
                      GitHub
                    </Button>
                  </Link>
                  {demoLink && (
                    <Link
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outlined" color="secondary">
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
                <Typography variant="body2" className="text-gray-400">
                  Technologies used:
                </Typography>
                <div className="flex flex-wrap mt-2 space-x-4">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray-300 text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hover Effect */}
      <style jsx>{`
        .relative:hover .duration-500 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
