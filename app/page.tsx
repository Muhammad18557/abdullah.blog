"use client";
import React, { useState, useEffect } from "react";
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
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center w-full">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:mr-12 flex-shrink-0 self-start">
          <img
            src="/headshots/abdullah-pic.jpg"
            alt="Muhammad Abdullah"
            className="w-32 h-32 md:w-56 md:h-56 rounded-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {displayText}
            <span className="blinking-cursor">!</span>
          </h2>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            I'm Muhammad Abdullah
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Software Engineering and Machine Learning enthusiast
          </p>
          <p className="text-lg text-gray-400">
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
          <div className="mt-6">
            <a
              href="/path-to-resume.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <Skills />

      <TimeLine />
    </div>
  );
}
