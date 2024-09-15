"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TimeLine from "../components/home/TimeLine";
import Skills from "../components/home/Skills";

export default function Home() {
  const greetings = ["Hi", "ٱلسَّلَامُ عَلَيْكُمْ", "Bonjour", "Hola", "Hallo"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = greetings[index];

      if (isDeleting) {
        // Handle backspacing
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Handle typing
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // When finished typing the word
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      }

      // When finished deleting the word
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % greetings.length); // Move to the next word
      }
    };

    const typingSpeed = isDeleting ? 50 : 150; // Speed of typing/deleting
    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center text-white w-full mt-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:mr-12 flex-shrink-0 self-center">
          <img
            src="/headshots/abdullah-pic.jpg"
            alt="Muhammad Abdullah"
            className="w-60 h-60 rounded-full object-cover"
          />
          <div className="mt-4 p-4 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-bold mt-2 text-white">
              Muhammad Abdullah
            </h3>
            <p className="text-md text-gray-400">SWE Intern @ Defog.ai</p>
            <p className="text-md text-gray-400">CS @ YNC|NUS 2025</p>
            <p className="text-md text-gray-400">Aitchison 2020</p>
            <div className="flex items-center justify-center mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                alt="flag of Pakistan"
                className="w-8 h-8 mr-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
                alt="flag of Singapore"
                className="w-8 h-8"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="/path-to-resume.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="ml-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-5a49741ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="text-blue-500 hover:text-blue-700"
                />
              </a>
              <a
                href="https://github.com/Muhammad18557"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a
                href="mailto:muhammad.abdullah@u.yale-nus.edu.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a
                href="https://www.instagram.com/abdullah_18557"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="text-pink-500 hover:text-pink-700"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {displayText}
            <span className="blinking-cursor">!</span>
          </h2>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">I'm Abdullah</h2>
          <p className="text-lg md:text-xl mb-4">
            Software Engineering and Machine Learning enthusiast
          </p>
          <p className="text-lg text-gray-400 text-justify p-2">
            I am a computer science student at the Yale-NUS College of the
            National University of Singapore specializing in software
            engineering. I am passionate about using technology to make a
            positive impact on the world and strive to be a valuable asset to
            the tech industry. My skillset includes expertise in multiple
            programming languages such as Python, C++, Java, OCaml, and
            JavaScript. I have experience working with popular frameworks like
            Next.js, Flask, Django, and FastAPI and constantly looking to learn
            more. Besides my passion for technology, I'm an avid cricket player
            and fan, and I like to unwind with swimming and squash in my free
            time.
          </p>
        </div>
      </div>

      <Skills />

      {/* <TimeLine /> */}
    </div>
  );
}
