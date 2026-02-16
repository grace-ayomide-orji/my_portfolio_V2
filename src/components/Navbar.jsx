import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dowloadIcon from '../assets/icons/download_resume.png'
import myLogo from '../assets/images/my_logo.png'


function Navbar(){
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

  useEffect(() => {

    // Function to close menu when clicking outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

    return(
          
        <nav ref={navRef} className="navbar-container">

            <div className="nav-links-container-md w-full block md:hidden flex items-center justify-between px-[15px]">

                <NavLink to="/" className='medium-screen-logo'>
                    <img src={myLogo} alt="download-my-resume-icon"/>
                </NavLink>

                <button
                className="burger-toggler focus:outline-none"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}> 
                    {isOpen ? "✖" : "☰"} 
                </button>

            </div>
           
            <ul className={`nav-links-container md:w-full flex md:justify-evenly md:items-center bg-[#ffffff] ${isOpen ? "nav-open" : ""}` }>

                <li>
                    <NavLink to="/" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end >Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about-me" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>About
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/skill" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>Skills
                    </NavLink>
                </li>

                <li className="hidden md:block large-screen-logo"> 
                    <NavLink to="/">
                        <img src={myLogo} alt="my logo" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/#contact-me"  
                    className={({ isActive }) => { const isHashActive = window.location.hash === '#contact-me'; return isActive && isHashActive ? "nav-links active" : "nav-links";}}>Contact
                    </NavLink>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1--Kt8CLPorRul3bkoJgIfqn8HsWioA58/view?usp=sharing" target='_blank' rel="noopener noreferrer" className='download-resume'>
                        Bio & Resume 
                        <img src={dowloadIcon} alt="download-my-resume-icon" className='inline w-[18px] h-[18px]'/>
                    </a>
                </li>
            </ul>  
           
        </nav>
          
    )
}


export default Navbar;