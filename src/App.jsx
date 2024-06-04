import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Particle from "./Components/Particle.jsx/Particle";
import Projects from "./Components/Projects/Projects";

function App() {
  
  return (
    <>
      <Particle />
      <div className="z-1 position-relative">
        <Home />
        <About />
        <Projects/>
      </div>
    </>
  );
}

export default App;
