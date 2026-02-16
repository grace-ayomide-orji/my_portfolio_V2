import { useState, useRef, useEffect } from 'react';
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";


const beulah = '/beulah.png'
const handyman = '/handyman.png'
const portfolio = '/portfolio.png'
const portfoliov2 = '/portfolio_v2.png'
const pulseCast = '/pulse_cast.png'
 
const projects = [
    {
        id: 1,
        name: "MyHandyman",
        description: "A Flask-based service marketplace for hiring professionals, featuring service listings, user authentication, and booking. Hosted on PythonAnywhere.",
        image: handyman,
        link: "https://github.com/grace-ayomide-orji/handyman",
        website: "https://myhandyman.pythonanywhere.com/",
        techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Python(Flask)", "Mysql"]
    },
    {
        id: 2,
        name: "My Portfolio v1",
        description: "A personal Flask-based portfolio. This portfolio showcases my skills, projects, and experience as a Full-Stack Web Developer Hosted on Render.",
        image: portfolio,
        link: "https://github.com/grace-ayomide-orji/my_portfolio",
        website: "https://my-portfolio-uy10.onrender.com/",
        techStack: ["HTML", "CSS", "JavaScript", "Python(Flask)"]
    },
    {
        id: 3,
        name: "Beulah",
        description: "A Flask-powered church ministry website for sharing resources, audio messages, and event updates. It includes an admin dashboard and a modern, welcoming design. Hosted on GoDaddy.",
        image: beulah,
        link: "https://github.com/grace-ayomide-orji/Beulah-App",
        website: "https://beufoundation.org/",
        techStack: ["HTML", "CSS", "JavaScript", "Python(Flask)", "Mysql"]
    },  
    {
        id: 4,
        name: "My Portfolio v2",
        description: "A sleek, interactive portfolio version 2 built with React and Tailwind for a smooth user experience. Hosted on Render.",
        image: portfoliov2,
        link: "https://github.com/grace-ayomide-orji/my_portfolio_V2",
        website: "https://www.graceayomide.com",
        techStack: ["React", "Tailwind"]
    },
    {
        id: 5,
        name: "PulseCast",
        description: "A dynamic Next.js 15 app combining real-time news aggregation and weather forecasts. Built as my first Next.js project for a job requirement, a challenging yet rewarding journey into modern React frameworks.",
        image: pulseCast,
        link: "https://github.com/oloruntobi-grace-ayomide/pulseCast",
        website: "https://pulse-cast-pi.vercel.app",
        techStack: ["Next.js", "Tailwind", "NewsAPI", "OpenWeatherMap"]
    }
]

function Project (){
    const [activeFilter, setActiveFilter] = useState("All");
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    const filters = ["All", "React", "Flask", "Next.js", "JavaScript", "HTML", "CSS", "jQuery", "Python(Flask)", "Mysql", "MongoDB", "Prisma", "API", "Vercel AI SDK", "Prompt Engineering"];

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
                                <p className="text-[16px] md:w-[85%]">{project.description}</p>
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
        </Layout>  
        
    )
}

export default Project;