import React from "react";
import { motion } from "framer-motion";

/**
 * Fade + rise once when the element scrolls into view.
 * MotionConfig (reducedMotion="user") in App disables it for users who
 * prefer reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 28, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
