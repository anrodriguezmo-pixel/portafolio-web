import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
