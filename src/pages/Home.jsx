import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import myPicture from '../assets/images/my_pic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faDownload} from "@fortawesome/free-solid-svg-icons";
function  Home(){
    return(
        <Layout>
           
             <div className="hero-section flex parent" data-aos="fade-up" data-aos-easing="ease-in-out">

                <div className="intro w-full md:w-[55%] lg:mt-[40px]">
                    <h1 className="md:text-[60px] font-bold my-[10px] text-[#801B36]">Hi <span className="waving-hand md:text-[60px] font-bold">👋🏾</span></h1>
                    <h2 className="md:text-[46px] font-bold my-[10px] text-[#801B36]">I am Grace Ayomide Orji</h2>
                    <h3 className="md:text-[36px] font-bold my-[10px] text-[#801B36]">A Full-Stack Web-Developer</h3>
                    <p className="md:text-[18px] md:pr-[70px] leading-[35px] tracking-[0.5px] text-[#333333]">I specialize in building sophisticated websites and AI-powered applications that seamlessly blend creativity with technical expertise to deliver impactful digital experiences. I also have experience integrating AI agents and intelligent features to create dynamic and adaptive user experiences. With hands-on experience in software companies, I've honed my skills in real-world development environments.</p>
                    <div className="flex gap-10 mt-[20px]">
                        <a href="https://github.com/grace-ayomide-orji" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="fas" /></a>
                        <a href="https://www.linkedin.com/in/grace-orji-ab3a1a263" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas" /></a>
                        <a href="https://wa.me/2348068345502" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fas" /></a>
                        <a href="mailto:oloruntobiga@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="fas" /></a>
                    </div>
                    <div className="flex gap-x-5 md:gap-y-o gap-y-4 md:flex-row flex-col mt-[20px]">
                        <Link to="/projects" className="hero-buttons-links view-my-works"> View My Works <FontAwesomeIcon icon={faArrowRight} /></Link>
                        <Link to="/projects" download="Grace-Ayomide-Orji-Cv.pdf" className="hero-buttons-links download-cv-btn"> Download CV <FontAwesomeIcon icon={faDownload} /></Link>
                    </div>
                </div>

                <div className="profile-pic md:w-[45%]">
                    <img src={myPicture} alt="Profile Picture" />
                </div>
            </div>

            <div className="showcase-parent parent" data-aos='fade-up' >
                
                <Link to="/projects" className="showcase block"  data-aos-delay='500' data-aos='fade-up'  data-aos-easing="ease-in-out">
                    <p className="showcase-title">Completed Projects</p>
                    <p className="showcase-count">5+</p> 
                </Link>
                
                <div className="showcase cursor-pointer"  data-aos-delay='500' data-aos='fade-up'  data-aos-easing="ease-in-out">
                    <p className="showcase-title">Years of Experience</p>
                    <p className="showcase-count">2+</p>
                </div>
            </div>

            <Contact/>

        </Layout>
    )
}

export default Home