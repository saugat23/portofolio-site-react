import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
  <>
  <Navbar />
  <Hero />
  <About />
  <Experience />
  <Projects />
  <Contacts />
  </>
  )
}

export default App;
