import Layout from "../components/Layout";

const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Langtrace AI",
      duration: "2025 - Present",
      description: "Working remotely on multiple client projects, building full-stack features with Next.js, React, and AI tools. Collaborating with cross-functional teams to deliver scalable solutions, integrating Vercel AI SDK for intelligent features, and maintaining high code quality with TypeScript and best practices. This role has deepened my understanding of modern frameworks and AI-powered applications.",
      techStack: ["Next.js", "TypeScript", "React", "TailwindCSS", "Vercel AI SDK", "RESTFUL API"]
    },
    {
      id: 2,
      role: "Front-End Developer & Instructor",
      company: "Page Innovations",
      duration: "2025 (5 months)",
      description: "Worked onsite as a front-end developer and instructor. Built responsive frontend projects using React, JavaScript, HTML, and CSS. Created curriculum and taught HTML/CSS fundamentals to beginners, mentoring students through hands-on projects and code reviews. This dual role sharpened my communication skills and deepened my frontend expertise.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "RESTFUL API"]
    },
    {
      id: 3,
      role: "Intern",
      company: "Meezak Technologies",
      duration: "2025 (3 months)",
      description: "Worked hybrid as an intern, contributing to frontend development of real-world projects. Gained hands-on experience with React, TypeScript, and TailwindCSS under senior mentorship. Participated in code reviews and team meetings, accelerating my growth in modern frontend practices and teamwork.",
      techStack: ["HTML", "CSS", "TypeScript", "React"]
    },
    {
      id: 4,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2024 - 2025",
      description: "Built custom websites for small businesses and individuals while job hunting. Collaborated with clients to understand requirements, designed responsive UIs, and delivered fully functional sites. Projects ranged from portfolio sites to small business landing pages.",
      techStack: ["React", "Next.js", "TailwindCSS", "HTML", "CSS", "JavaScript", "Python(flask)", "MySQL"]
    }
];

function Experience() {
  return (
    <Layout>
      <div className="experience-parent parent">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <div
              className="experience-box gap-x-5 rounded-lg bg-white md:min-h-[150px] h-fit shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out py-6 px-6"
              key={experience.id}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <div className="w-full">
                <h3 className="md:text-[30px] text-[24px] font-semibold">
                  {experience.role}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  {experience.company} • {experience.duration}
                </p>
                <div className="md:w-[85%]">
                  <p className="text-[16px]">{experience.description}</p>
                </div>
                {experience.techStack.length > 0 && (
                  <ul className="flex flex-wrap gap-3 mt-[10px]">
                    {experience.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="bg-[#4F4F4F] text-white px-2 py-[2px] rounded-lg text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="experience-box rounded-lg bg-white md:h-[150px] h-fit p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-[#801B36] opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#801B36] mb-3">
              No Experience Yet
            </h3>
            <p className="text-gray-600 text-md">
              Check back later for updates on my professional journey.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Experience;