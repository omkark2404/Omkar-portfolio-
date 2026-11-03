import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin yellow scroll-progress line pinned to the very top of the page. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1.5 origin-left border-b-2 border-ink bg-noteyellow"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
