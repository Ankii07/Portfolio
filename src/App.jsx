import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Learning from './sections/Learning.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Astronaut from './sections/Astronaut.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      {/* <Astronaut/> */}
      <Hero />
      <About />
      <Projects />
      <Learning />
      <WorkExperience />
      <Contact />
      <Footer />
     
    </main>
  );
};

export default App;
