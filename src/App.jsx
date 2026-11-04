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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
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
