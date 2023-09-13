import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Signature from "./components/Signature";
function App() {
  return (
    <div className="bg-white h-full ">
      <Intro />
      <About />
      <ProjectSection />
      <Contact />
      <Signature />
    </div>
  );
}

export default App;
