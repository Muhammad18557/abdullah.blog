import TimeLine from "../components/home/TimeLine";
import Skills from "../components/home/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center text-white w-full mt-10">
      {/* Main Content */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center  w-full ">
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
            Hi, I'm Muhammad Abdullah
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
            Next.js, Flask, Django, and FastAPI. I am a dedicated and ambitious
            individual who is constantly looking to learn and improve my skills.
            In addition to my passion for technology, I love playing and
            watching cricket and do swimming and squash as a hobby.
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
