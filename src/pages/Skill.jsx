import { useState } from 'react';
import Layout from "../components/Layout";
import responsiveImg from "../assets/icons/responsive.png"
import hoverImg from "../assets/icons/responsive_hover.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpenai } from '@fortawesome/free-brands-svg-icons';
import { faComments, faCircleNodes, faRobot } from '@fortawesome/free-solid-svg-icons';
function  Skill(){
    const [imageSrc, setImageSrc] = useState(responsiveImg);
    return(
        <Layout>
            <div className="skills-container parent">
            
            <h2 className="text-center md:text-[45px] font-bold mb-[50px] text-[#801B36] skill-hub-header">Expertise Hub</h2>

            {/* Front-end Skills */}
            <div className="skill-box flex flex-wrap justify-center text-center gap-6" data-aos="fade-up" data-aos-delay="0">
                <h2 className="w-full text-center text-[30px] py-[10px]">Front-end Stack</h2>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-html5-plain text-4xl"></i>
                    <p>HTML5</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-css3-plain text-4xl"></i>
                    <p>CSS3</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-javascript-plain text-4xl"></i>
                    <p>JavaScript</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-typescript-plain text-4xl"></i>
                    <p>TypeScript</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-jquery-plain text-4xl"></i>
                    <p>jQuery</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-bootstrap-plain text-4xl"></i>
                    <p>Bootstrap</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-tailwindcss-original text-4xl"></i>
                    <p>Tailwind</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-react-original text-4xl"></i>
                    <p>React</p>
                </div>

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-nextjs-plain text-4xl"></i>
                    <p>Next.js</p>
                </div>
            
          
            </div>

            {/* Back-end Skills */}
            <div className="skill-box flex flex-wrap justify-center text-center gap-6" data-aos="fade-up" data-aos-delay="200">
                <h2 className="w-full text-center text-[30px] py-[10px]">Back-end Stack</h2>
                
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-python-plain text-4xl"></i>
                    <p>Python</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-flask-original text-4xl"></i>
                    <p>Flask</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-nextjs-plain text-4xl"></i>
                    <p>Next.js</p>
                </div>

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                <i className="devicon-express-original text-4xl"></i>
                    <p>Express</p>
                </div>

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-mysql-original text-4xl"></i>
                    <p>MySQL</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-mongodb-plain text-4xl"></i>
                    <p>MongoDB</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-prisma-original text-4xl"></i>
                    <p>Prisma</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-fastapi-plain text-4xl"></i>
                    <p>RESTful API</p>
                </div>
            </div>

            {/* AI & LLM Skills */}
            <div className="skill-box flex flex-wrap justify-center text-center gap-6" data-aos="fade-up" data-aos-delay="250">
                <h2 className="w-full text-center text-[30px] py-[10px]">AI & Agentic Programming</h2>
                
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <FontAwesomeIcon icon={faOpenai} className="text-4xl" /> 
                    <p>OpenAI API</p>
                </div>
             
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-vercel-original text-4xl"></i>
                    <p>Vercel AI SDK</p>
                </div>

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <FontAwesomeIcon icon={faComments} className="text-4xl" />
                    <p>Prompt Engineering</p>
                </div>
               
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <FontAwesomeIcon icon={faCircleNodes} className="text-4xl" />
                    <p>RAG Systems</p>
                </div>

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <FontAwesomeIcon icon={faRobot} className="text-4xl" />
                    <p>AI Agents</p>
                </div>
            </div>

            {/* Other Tools */}
            <div className="skill-box flex flex-wrap justify-center text-center gap-6" data-aos="fade-up" data-aos-delay="300"> 

                <h2 className="w-full text-center text-[30px] py-[10px]">Other Tools</h2>   

                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-git-plain text-4xl"></i>
                    <p>Git</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-github-original text-4xl"></i>
                    <p>GitHub</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-vscode-plain text-4xl"></i>
                    <p>VS Code</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-slack-plain text-4xl"></i>
                    <p>Slack</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center">
                    <i className="devicon-trello-plain text-4xl"></i>
                    <p>Trello</p>
                </div>
                <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-3 text-center"
                 onMouseEnter={() => setImageSrc(hoverImg)}
                 onMouseLeave={() => setImageSrc(responsiveImg)}>
                <img src={imageSrc} className="mx-auto transition-all duration-300" alt="Responsive Designs"/>
                    <p>Responsive Designs</p>
                </div>
            </div>
        
            </div>
        </Layout>
    )
}

export default Skill