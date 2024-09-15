"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" className="font-mono bg-gray-900">
        <Toolbar className="flex justify-between sm:justify-end">
          {/* Desktop links */}
          <div className="hidden sm:flex justify-end space-x-9 lg:space-x-24">
            <Link
              href="/"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 py-2"
            >
              About
            </Link>
            <Link
              href="/education"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 py-2"
            >
              Education
            </Link>
            <Link
              href="/experience"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 py-2"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 py-2"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 py-2"
            >
              Blog
            </Link>
            <Link
              href="/ask.ai"
              className="m-2 lg:m-4 text-base lg:text-lg hover:text-blue-500 transition duration-300 border-blue-500 border-2 rounded-[40px] lg:rounded-[60px] px-2 lg:px-4 py-2"
            >
              Ask AI
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: "bg-gray-900 font-mono" }} // Apply background and font styles
      >
        <List className="w-60">
          {[
            { text: "About", href: "/" },
            { text: "Education", href: "/education" },
            { text: "Experience", href: "/experience" },
            { text: "Projects", href: "/projects" },
            { text: "Blog", href: "/blog" },
            { text: "Ask AI", href: "/ask.ai" },
          ].map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={handleDrawerToggle}
              className="my-2 mx-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              <Link href={item.href} passHref>
                <ListItemText
                  primary={item.text}
                  className="text-white font-mono text-center"
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
