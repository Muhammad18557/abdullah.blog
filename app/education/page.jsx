import SchoolCard from "../../components/education/SchoolCard";

const educationData = [
  {
    id: 1,
    schoolName: "Yale-NUS College",
    logo: "https://postlab.yale.edu/sites/default/files/ynclogo_custom_1.png",
    link: "https://www.yale-nus.edu.sg",
    programName: "Bachelor of Science (Honours) in Mathematical, Computational and Statistical Sciences",
    duration: "Aug 2021 - May 2025",
    description: "A rigorous program blending mathematics, computer science, and statistical sciences with various interdisciplinary approaches.",
    activities: [
      "Peer Tutor for Introduction to Computer Science with Functional Programming",
      "Yale-NUS College Muslim Students Association",
      "Co-president Yale-NUS Hacks",
      "Lead Student Data Archivist",
      "Yale-NUS Cricket Team",
      "Swimming",
    ],
  },
  {
    id: 2,
    schoolName: "Yale University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_Shield_1.svg",
    link: "https://www.yale.edu",
    programName: "Exchange Semester for Bachelor of Science (Honours) in Computer Science",
    duration: "Aug 2023 - Jan 2024",
    description: "Focused on advanced computer science concepts during an exchange semester.",
    activities: [
      "Member Yale Muslim Students Association",
      "Yale Coding Club (Developer)",
      "Yale Outdoors",
      "Member Yale Cricket Team",
      "Yalies for Pakistan",
      "Swimming",
    ],
  },
  {
    id: 3,
    schoolName: "University of British Columbia (UBC)",
    logo: "https://live.staticflickr.com/8027/29016431894_d3a9befbfd_h.jpg",
    link: "https://www.ubc.ca",
    programName: "Vancouver Summer Session with Electrical and Computer Engineering Department",
    duration: "July 2023 - Aug 2023",
    description: "Engaged in courses and activities with a focus on web applications and algorithm development.",
    activities: ["Hiking", "Exploring UBC, Vancouver, and Canada"],
  },
  {
    id: 4,
    schoolName: "Aitchison College",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0ALSqe4P0oUIdL2xZM3o_K-y-u2n2fJLag&s",
    link: "https://www.aitchison.edu.pk",
    programName: "Cambridge International O and A Levels",
    duration: "Aug 2014 - Aug 2020",
    description: "Completed Cambridge International O and A Levels with an emphasis on science and mathematics.",
    activities: [
      "Senior School Prefect",
      "House Captain",
      "General Secretary Mathematics Society",
      "Director Finance at ACMUN",
      "Represented school at interschool and national Math and Science Olympiads",
    ],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu) => (
          <SchoolCard
            key={edu.id}
            schoolName={edu.schoolName}
            logo={edu.logo}
            link={edu.link}
            programName={edu.programName}
            duration={edu.duration}
            description={edu.description}
            activities={edu.activities}
          />
        ))}
      </div>
    </div>
  );
}
