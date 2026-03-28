import { useState, useRef, useEffect } from 'react';
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink, faX} from "@fortawesome/free-solid-svg-icons";


const beulah = '/beulah.png'
const handyman = '/handyman.png'
const portfolio = '/portfolio.png'
const portfoliov2 = '/portfolio_v2.png'
const pulseCast = '/pulse_cast.png'
const tripMate = '/tripmate.png'
const yunCapital='/yuncapital.png'
const exceedingGrace='/exceedinggrace.png'
 
const projects = [
    {
        id: 1,
        name: "MyHandyman",
        description: "My very first project, built from scratch as the final exam of my bootcamp. It's a service marketplace where users can browse, book, and manage handyman services. I chose Python(Flask) because that's what i learned, and I handled everything from authentication, database design (MySQL), to frontend with Bootstrap. It was challenging but incredibly rewarding, finishing it gave me the confidence to present something real at the end of the course. Interestingly, this project landed me my first internship. It will always hold a special place in my heart.",
        image: handyman,
        link: "https://github.com/grace-ayomide-orji/handyman",
        website: "https://myhandyman.pythonanywhere.com/",
        techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Python(Flask)", "Mysql"]
    },
    {
        id: 2,
        name: "My Portfolio v1",
        description: "My first attempt at a personal portfolio, built with Flask. I needed a place to showcase all the projects I was building while job hunting. It's simple, but it did the job and i hosted it Render. It held my resume, project links, and contact info. Looking back, it's a nice time capsule of where I started.",
        image: portfolio,
        link: "https://github.com/grace-ayomide-orji/my_portfolio",
        website: "https://my-portfolio-uy10.onrender.com/",
        techStack: ["HTML", "CSS", "JavaScript", "Python(Flask)"]
    },
    {
        id: 3,
        name: "Beulah",
        description: "After bootcamp, I wanted to use my new skills to give back. I attend a wonderful non-denominational fellowship ministry called Beulah Foundation for Christ, and at the time their website was outdated and barely functional. So I took it upon myself to build them a new one and it was my first unsupervised project. I designed the UI, built it with Flask, added an admin dashboard for managing resources and event updates, and even handled the GoDaddy deployment. Seeing it live and knowing it serves the community fills me with pride and joy.",
        image: beulah,
        link: "https://github.com/grace-ayomide-orji/Beulah-App",
        website: "https://beufoundation.org/",
        techStack: ["HTML", "CSS", "JavaScript", "Python(Flask)", "Mysql"]
    },  
    {
        id: 4,
        name: "My Portfolio v2",
        description: "After landing my first job, I realized I needed to level up my frontend skills. I hadn't learned React during bootcamp, so I decided to rebuild my portfolio as a learning project. I taught myself React and Tailwind CSS (coming from Bootstrap) and created this sleek, interactive version. The difference between v1 and v2 is like night and day, it shows how much I've grown in design and frontend development. I'm really proud of it.",
        image: portfoliov2,
        link: "https://github.com/grace-ayomide-orji/my_portfolio_V2",
        website: "https://www.graceayomide.vercel.app",
        techStack: ["React", "Tailwind"]
    },
    {
        id: 5,
        name: "PulseCast",
        description: "This project was born from a high-stakes challenge. I received a job offer that required Next.js knowledge, which I didn't have at the time. The company gave me one week to learn it and build a project. So I immersed myself in Next.js 15 and created PulseCast, a real-time news and weather app with search functionality. It was tough, but because I already knew React, I was able to adapt quickly. The result? I got the job, and they were impressed by how fast I learned. PulseCast represents my ability to rise to a challenge",
        image: pulseCast,
        link: "https://github.com/oloruntobi-grace-ayomide/pulseCast",
        website: "https://pulse-cast-pi.vercel.app",
        techStack: ["Next.js", "Typescript", "Tailwind", "NewsAPI", "OpenWeatherMap"]
    },
    {
        id: 6,
        name: "Tripmate",
        description: "While working at that job, I needed to learn Vercel's AI SDK to build AI features. The company encourages learning by doing, so I built TripMate, an AI travel assistant. It uses the Vercel AI SDK for real-time chat, helps users plan trips with packing lists and file uploads, and integrates weather data. It was my playground for mastering AI prompts, serverless functions, and optimistic UI updates. It's a full-stack showcase of what I learned on the job.",
        image: tripMate,
        link: "https://github.com/grace-ayomide-orji/TripMate",
        website: "https://trip-mate-v1.vercel.app",
        techStack: ["Next.js", "Typescript", "Tailwind", "Vercel AI SDK", "OpenWeatherMap"]
    },
    {
        id: 7,
        name: "Yun Capital",
        description: "One day I stumbled upon yuncapital.com and was struck by how outdated it looked. I thought, 'This could be so much better.' So as a frontend challenge, I rebuilt the entire site from scratch with React and Tailwind, giving it a modern, professional look. I even reached out to the original owners (they never replied), but the project was never about them, it was about proving to myself that I could take a poorly designed site and transform it into something credible, functioning, serve targeted audience and beautiful. It's a testament to my initiative and design sense.",
        image: yunCapital,
        link: "https://github.com/grace-ayomide-orji/Yun",
        website: "https://yuncapitalmanagement.vercel.app",
        techStack: ["React", "Tailwind", "AOS"]
    },
    {
        id: 8,
        name: "Exceeding Grace Daycare",
        description: "This project is close to my heart. It's for my sister's guidance, her new daycare business. When she started Exceeding Grace Daycare at home, I wanted to contribute more than just encouragement. I noticed the flyers she was using could use a little design love (I'd been playing around with Canva), so I helped create better marketing materials. But I thought, why stop there? A website would give parents a professional place to learn about the daycare, see what makes it special, and even book a tour. So I built a her clean website, welcoming, and easy to navigate. It includes information about the program, photos of the space, and a simple way for parents to schedule visits. Seeing my sister's face when the site went live was priceless. It's one thing to build projects for a portfolio, it's another to build something that helps family. This one will always remind me that code can be a gift.",
        image: exceedingGrace,
        link: "https://github.com/grace-ayomide-orji/ExceedingGrace",
        website: "https://exceedinggrace.vercel.app",
        techStack: ["React", "Tailwind", "AOS"]
    }
]

function Project (){
    const [activeFilter, setActiveFilter] = useState("All");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownOpen]);

    // Filter projects based on techStack
    const filteredProjects = activeFilter === "All" ? projects  : projects.filter(project => project.techStack.some(tech => tech.includes(activeFilter)));

    // Define filter buttons based on key technologies
    const filters = ["All", "React", "Flask", "Next.js", "JavaScript", "Typescript", "HTML", "CSS", "jQuery", "Python(Flask)", "Mysql", "MongoDB", "Prisma", "API", "Vercel AI SDK", "Prompt Engineering"];

    return(
        <Layout>
            {/* data-aos="fade-up" data-aos-easing='ease-in-out' */}
            <div className="project-parent parent">

                {/* Filter Dropdown */}
                <div className="flex items-center gap-2 mb-10">

                    <label className="text-sm font-semibold text-[#801B36]">
                        Filter by Technology:
                    </label>
                    
                    <div className="relative" ref={dropdownRef}>
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 px-2 py-[0.6px] [&>*]:text-sm rounded-md border border-[#801B36] text-[#801B36] bg-white font-normal cursor-pointer hover:bg-[#801B36] hover:text-white transition-all duration-300 min-w-[150px] justify-between"
                        >
                            <span>{activeFilter}</span>
                            <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute top-full mt-2 w-full bg-white border border-[#801B36] rounded-lg shadow-xl z-10 overflow-hidden [&>*]:text-sm [&>*]:px-2 [&>*]:font-normal [&>*]:cursor-pointer">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => {
                                            setActiveFilter(filter);
                                            setDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 transition-colors duration-200 ${
                                            activeFilter === filter
                                                ? 'bg-[#801B36] text-white'
                                                : 'hover:bg-gray-100 text-[#801B36]'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {filteredProjects.length > 0 ?
                    (filteredProjects.map((project, index) => (
                        <div className="project-box md:flex md:items-center gap-x-5 gap-y-3 rounded-lg bg-white lg:min-h-[250px] md:min-h-[300px] h-fit shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={index} data-aos="fade-up" data-aos-easing='ease-in-out'>
                            
                            <div className="project-img bg-[#801B36] rounded-t-lg md:rounded-l-lg md:rounded-r-none lg:min-h-[250px] md:min-h-[300px] h-full md:ml-[3px] md:w-[35%] w-full">
                                <img src={project.image} alt={project.name} className="w-full lg:min-h-[250px] md:min-h-[300px] h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none object-cover"/>
                            </div>

                            <div className="md:w-[65%] w-full p-4 md:p-0">
                                <h3 className="md:text-[30px] text-[24px] font-semibold">{project.name}</h3>
                                <div className="md:w-[85%]">
                                <p className="text-[16px]">
                                    {project.description.length > 180 
                                    ? `${project.description.substring(0, 180)}... ` 
                                    : project.description}
                                    {project.description.length > 180 && (
                                    <button
                                        onClick={() => {
                                        setSelectedProject(project);
                                        setModalOpen(true);
                                        }}
                                        className="text-[#0000ff] font-medium hover:underline bg-transparent focus:outline-none ml-1 text-xs"
                                    >
                                        Read more ➜
                                    </button>
                                    )}
                                </p>
                                </div>
                                {project.techStack.length > 0 && (
                                    <ul className="flex flex-wrap gap-3 mt-[10px]">
                                        {project.techStack.map((tech) => (
                                            <li key={tech} className="bg-[#4F4F4F] text-white px-2 py-[2px] rounded-lg text-xs">{tech}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="w-full flex gap-10 items-center mt-4 [&>a]:text-sm text-[#801B36] [&>a]:flex [&>a]:items-center [&>a]:gap-x-[0.6px] font-normal">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faLink} />Visit Website</a>
                                </div>
                            </div>
                        </div>
                    ))
                    ):( 
                        <div className="project-box md:flex md:items-center gap-x-5 gap-y-3 rounded-lg bg-white lg:h-[250px] md:h-[300px] h-fit p-8 shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out" data-aos="fade-up" data-aos-easing='ease-in-out'>
                            <div className="text-center w-full">
                                <svg className="w-16 h-16 mx-auto mb-4 text-[#801B36] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-[#801B36] mb-3">No Projects Yet</h3>
                                <p className="text-gray-600 text-md">
                                    While I haven't used this technology stack in my portfolio projects yet, I'm eager to learn and adapt to new technologies based on project requirements.
                                </p>
                            </div>
                        </div>
                    )
                }
                
            </div>

            {modalOpen && selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
                    onClick={() => setModalOpen(false)}
                >
                    <div 
                        className="project-modal relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {/* Close button */}
                        <div className='project-modal-header w-full min-h-[30px] sticky top-0 flex justify-end px-2 bg-white'>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="text-gray-500 hover:text-[#801B36] text-xl font-bold z-10"
                                aria-label="Close modal"
                            >
                                <FontAwesomeIcon icon={faX} className='h-3 w-3'/>
                            </button>
                        </div>

                        {/* Modal content */}
                        <div className="py-3 px-4">
                            {/* Image */}
                            <div className="w-full mb-5 bg-[#801B36] rounded-lg">
                                <img 
                                src={selectedProject.image} 
                                alt={selectedProject.name}
                                className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                            </div>
                            {/* Details */}
                            <div className="w-full">
                                <h2 className="text-2xl font-bold text-[#801B36] mb-3">{selectedProject.name}</h2>
                                <p className="mb-4 text-[16px] leading-relaxed">{selectedProject.description}</p>
                                
                                {/* Tech stack */}
                                {selectedProject.techStack.length > 0 && (
                                    <div className="mb-4">
                                        <h3 className="text-md font-semibold mb-2">Technologies</h3>
                                        <ul className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map(tech => (
                                            <li key={tech} className="bg-[#4F4F4F] text-white px-2 py-[2px] rounded-lg text-xs">{tech}</li>
                                        ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="w-full flex gap-5 items-center mt-4 [&>a]:text-sm text-[#801B36] [&>a]:flex [&>a]:items-center [&>a]:gap-x-[0.6px] font-normal">
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </a>
                                    <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        <FontAwesomeIcon icon={faLink} /> Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>  
        
    )
}

export default Project;