import React from "react";
import ProjectCard from "../../components/projects/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "NOCdoor (on it!)",
      githubLink: "https://github.com/Muhammad18557/NOCdoor",
      demoLink: "",
      year: "2024",
      description:
        "A Glassdoor-like platform for NOC Internships. This is being developed using Next.js, FastAPI, PostgreSQL, and containerized with Docker.",
      technologies: ["Next.js", "FastAPI"],
      image:
        "https://media.glassdoor.com/home/value-prop/sal/value-prop-carousel-desk-GB.png",
    },
    {
      title: "bookX",
      githubLink: "https://github.com/Muhammad18557/bookX",
      year: "2024",
      description:
        "A tinder for books that matches if a user likes a book and the owner of that book also likes one of the user's books. This was developed using Flask with Jinja templates for the frontend and sqlite3 database.",
      technologies: ["Flask", "sqlite3"],
      image:
        "https://www.shutterstock.com/image-vector/books-exchange-crossing-concept-hands-600nw-2275010403.jpg",
    },
    {
      title: "SDF Android App",
      githubLink: "https://github.com/Muhammad18557/SDFAndroid",
      demoLink: "",
      year: "2024",
      description:
        "An android app for Synchronous data flow visualisations. This was developed using Java and Android Studio.",
      technologies: ["Next.js", "FastAPI"],
      image:
        "https://www.researchgate.net/publication/314718264/figure/fig1/AS:704146437070848@1544893001378/A-task-graph-of-an-application-where-nodes-specify-tasks-with-their-workloads-and-edges.png",
    },
    {
      title: "Interpret Parseltongue ",
      githubLink: "https://github.com/yourusername/nocdoor",
      demoLink: "https://nocdoor-demo.com",
      year: "2024",
      description:
        "Implemented an interpreter for Parseltongue including number, string, boolean and object expressions, if then else, variable declaration and assignment, while and for loops, and function definition and call.",
      technologies: ["plait"],
      image:
        "https://media.cheggcdn.com/study/da9/da925d9a-87ea-40fd-b235-372f2c95ebdd/Screenshot2024-05-18at4.23.48PM.png",
    },
    {
      title: "CommuniLiving",
      githubLink: "https://github.com/Muhammad18557/CommuniLiving",
      demoLink: "https://www.youtube.com/watch?v=hZ62K27WAHM",
      year: "2023",
      description:
        "A full stack web application that helps people living in a shared apartment book shared amenities like living room, washing machines, dryers, etc. This was developed using Next.js, Django REST Framwork, and sqlite3.",
      technologies: ["Next.js", "Django REST Framework"],
      image:
        "https://stacked-editorial.sgp1.digitaloceanspaces.com/editorial/wp-content/uploads/2023/05/27212411/all-the-information-about-the-facilities.png",
    },
    {
      title: "Santorini ",
      githubLink: "https://github.com/Muhammad18557/Santorini",
      demoLink: "",
      year: "2023",
      description:
        "Designed a 5x5 command line interface version of the Santorini board game with 4 object-oriented design patterns (Strategy, Factory, Memento, and Command), undo/redo capability, and heuristic computer player functionality that has a 90% win rate.",
      technologies: ["Python", "C++"],
      image: "https://doc.boardgamearena.com/images/4/49/Iris-2.jpeg",
    },
    {
      title: "BankGUI ",
      githubLink: "https://github.com/yourusername/nocdoor",
      demoLink: "",
      year: "2024",
      description:
        "This application serves as a graphical platform for bank-related operations, written in Python. It offers a user-friendly interface for executing banking transactions such as account creation, transaction logging, and the application of interest and fees for different account types.",
      technologies: ["Python", "tkinter", "SQLAlchemy"],
      image:
        "https://community.sap.com/legacyfs/online/storage/blog_attachments/2022/03/Picture-9.png",
    },
    {
      title: "eGROCERY",
      githubLink: "https://github.com/yourusername/nocdoor",
      demoLink: "https://nocdoor-demo.com",
      year: "2022",
      description:
        "Collaborated with 4 students to develop an e-commerce web application tailored for groceries. Implmeneted frontend features include catalog browsing, cart functionality, and a robust user profile with order history. Authored the Software Requirements Specification (SRS) for clear project guidelines",
      technologies: ["React", "Flask", "MongoDB"],
      image:
        "https://cdn.dribbble.com/users/10668840/screenshots/17466358/media/88256504b18972f8fd4d82166fea8dc6.jpg?resize=400x0",
    },
    // Add more projects here...
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
