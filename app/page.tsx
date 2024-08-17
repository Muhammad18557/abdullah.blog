import TimeLine from "../components/home/TimeLine";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center text-white w-full mt-10">
      {/* Main Content */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center  w-full ">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:mr-12 flex-shrink-0 self-start">
          <img
            src="https://www.shutterstock.com/image-photo/portrait-middle-aged-man-260nw-556638379.jpg"
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
            Software Engineer and Machine Learning enthusiast
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

      {/* Skills Section */}
      <div className="mt-12 w-full px-6 md:px-0 md:w-3/4 lg:w-2/3">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Tech Stacks
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {/* Example skill with logo */}
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-html-logo.png"
              alt="HTML"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-css-logo.png"
              alt="CSS"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-javascript-logo.png"
              alt="JavaScript"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-python-logo.png"
              alt="Python"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-c++-logo.png"
              alt="C++"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">C++</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-django-logo.png"
              alt="Django"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">Django</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-flask-logo.png"
              alt="Flask"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">Flask</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-your-fastapi-logo.png"
              alt="FastAPI"
              className="w-12 h-12"
            />
            <span className="mt-2 text-lg text-gray-400">FastAPI</span>
          </div>
        </div>
      </div>

      <TimeLine />
    </div>
  );
}
