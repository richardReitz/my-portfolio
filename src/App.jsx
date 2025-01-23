import './App.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from 'react';
import HeaderMenu from './components/HeaderMenu';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PresentationSection from './components/PresentationSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration : 1500,
      once: true
    });
  }, []);

  return (
    <div className='container'>
        <HeaderMenu />
        <PresentationSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
    </div>
  );
}

export default App;
