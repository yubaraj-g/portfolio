import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Herosection from './components/Herosection.js';
import Navbarhead from './components/Navbarhead.js';
import Navbarleft from './components/Navbarleft.js';
import Navbarright from './components/Navbarright.js';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {

  return (

    <>

    <Navbarhead />

    <Navbarleft />

    <Navbarright />

    {/* the main section starts */}

    <Herosection />

    <Skills />

    <Projects />

    <About />

    <Contact />

    </>

    );
}

export default App;
