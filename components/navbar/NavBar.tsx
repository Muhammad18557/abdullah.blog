import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" className="font-mono">
      <Toolbar className="flex justify-between space-x-8">
        <Link
          href="/"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/education"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          Education
        </Link>
        <Link
          href="/experience"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          Blog
        </Link>
        <Link
          href="/askai"
          className="m-4 text-lg hover:text-blue-500 transition duration-300"
        >
          Ask AI
        </Link>
      </Toolbar>
    </AppBar>
  );
}
