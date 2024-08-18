import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" className="font-mono bg-gray-900">
      <Toolbar className="flex justify-end space-x-24">
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
          href="/ask.ai"
          className="m-4 text-lg hover:text-blue-500 transition duration-300 border-blue-500 border-2 rounded-[60px] px-4 py-2"
        >
          Ask AI
        </Link>
      </Toolbar>
    </AppBar>
  );
}
