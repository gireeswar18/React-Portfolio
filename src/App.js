import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <HeroSection />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
