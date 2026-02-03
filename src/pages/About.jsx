import Layout from "../components/Layout";
import myPicture from '../assets/images/my_pic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
function  About(){
    return(
        <Layout>
            <div className="about-parent parent" data-aos="fade-up" data-aos-easing='ease-in-out'>
        
                <div className="about-img-body w-full md:w-[35%]">
                    <img src={myPicture} alt="A Portriat Profile Picture of me" loading="lazy"/>
                </div>

                <div className="about-info-body w-full md:w-[65%] md:pl-[24px] ">

                    <h2 className="md:text-[45px] font-bold text-[#801B36]"><span  className="md:text-[50px]">Step Into My World</span><br/> I'm Grace Ayomide Orji,</h2>

                    <div className="mb-[25px]">
                        <p>an ardent Full-Stack Web Developer who thrives on bringing digital ideas to life through clean, innovative code. My journey into coding began at 18, driven by curiosity and a love for technology. I started by self-teaching with free online coding platforms, then pushed my skills further by diving into a Fullstack Web Development course on Udemy. To refine my expertise, I enrolled in a top-tier bootcamp where I gained hands-on experience and advanced training.</p>
                    </div>
                    <div className="mb-[25px]">
                        <p>Beyond the world of code, I find balance in the gym, nourish my mind and body with skincare routines and healthy fruits, and always strive for that next level of growth.</p>
                    </div>
                    
                    <div>
                        <p>As Steve Jobs once said, “Technology is nothing. What's important is that you have faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.” This perfectly resonates with my belief in the power of technology to create something meaningful.</p>
                    </div>
                    
                </div>
    
            </div>

            <div className="social-parent parent bg-[#801B36] h-auto" data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-delay='200'>
                <h2 className="md:text-[80px] text-[#ffffff]">Let's Connect on Socials! 🚀</h2>
                <div className="flex justify-around items-center md:mt-[60px] fas-social-box">
                    <a href="https://www.instagram.com/oloruntobigrace/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className="fas-socials" /></a>
                    <a href="https://github.com/oloruntobi-grace-ayomide" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="fas-socials" /></a>
                    <a href="https://www.linkedin.com/in/grace-oloruntobi-ab3a1a263" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas-socials" /></a>
                    <a href="mailto:oloruntobiga@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="fas-socials" /></a>
                </div>
            </div>
        </Layout>
    )
}

export default About