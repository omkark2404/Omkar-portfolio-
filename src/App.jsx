import React from "react";
import { MotionConfig } from "framer-motion";

import {
  About,
  BackToTop,
  Contact,
  Experience,
  Footer,
  Hero,
  Marquee,
  Navbar,
  ScrollProgress,
  Works,
} from "./components";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="paper-bg min-h-screen text-ink">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Works />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
};

export default App;
