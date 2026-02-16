import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './pages/Home';
const Project = lazy(() => import('./pages/Project'));
const About = lazy(() => import('./pages/About'));
const Skill = lazy(() => import('./pages/Skill'))
import NotFound from './pages/NotFound';


const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    const timeout = setTimeout(handleScroll, 50); // Debounce by 50ms
    return () => clearTimeout(timeout);
  }, [hash, pathname]);


  return null;
};


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: false,
      offset: 120
    });
  }, []);

  useEffect(() => {
    const handleReady = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0'; // Optional: fade out
        setTimeout(() => {preloader.remove();
        AOS.refresh()}, 300); // Match fade duration
      }else {
        console.warn('Preloader not found');
        AOS.refresh(); 
      }
    };

    if (document.readyState === 'complete') {
      handleReady(); // Document already loaded
    } else {
      window.addEventListener('load', handleReady);
      return () => window.removeEventListener('load', handleReady);
    }
  }, []);

  return (
    <Suspense>
      <Router>

        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Router>
    </Suspense>
  );
}

export default App;