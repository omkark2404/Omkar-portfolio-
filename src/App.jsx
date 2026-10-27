import VisualBoundary from "./components/VisualBoundary";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Achievement,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Preloader,
  StarsCanvas,
  Works,
} from "./components";
import EasterEggs from "./components/EasterEggs";
import ElasticCursor from "./components/ElasticCursor";
import SkillKeyboard from "./components/SkillKeyboard";
import ReactBitsAudioProvider from "./reactbits/context/ReactBitsAudioProvider";
import ReactBitsCursorProvider from "./reactbits/context/ReactBitsCursorProvider";

const App = () => {
  return (
    <ReactBitsCursorProvider>
      <ReactBitsAudioProvider>
        <Preloader>
          <BrowserRouter>
            <div
              className="relative z-0 bg-[#050816]"
              style={{ backgroundColor: "#050816" }}
            >
              <ElasticCursor />
              <EasterEggs />
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <VisualBoundary><StarsCanvas /></VisualBoundary>
              <About />
              <Works />
              <VisualBoundary fallback={<section id="skills" className="p-8 text-white"><h2>Project Skills</h2><p>Python · SQL · FastAPI · Flask · React · MySQL · SQLite · Docker. Explore the linked repositories for examples.</p></section>}><SkillKeyboard /></VisualBoundary>
              <div className="relative z-0">
                <Contact />
              </div>
            </div>
          </BrowserRouter>
        </Preloader>
      </ReactBitsAudioProvider>
    </ReactBitsCursorProvider>
  );
};

export default App;
