import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { LINKEDIN_URL } from "../constants";

const Arrow = () => (
  <svg className="hero-role-arrow" viewBox="0 0 48 40" fill="none" aria-hidden="true">
    <path d="M3 36C18 33 25 20 39 5M25 7L40 4L39 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="hero" className="portfolio-hero">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="hero-identity">
          <p className="hero-intro font-hand">my name is
            <svg viewBox="0 0 80 12" fill="none" aria-hidden="true"><path d="M3 5Q38 0 77 5M12 10Q38 6 67 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </p>
          <span className="hero-pill hero-pill-left">ANALYSIS OVER ASSUMPTIONS</span>
          <span className="hero-pill hero-pill-right">ANSWERS YOU CAN TEST</span>
          <h1 className="hero-name font-pixel">OMKAR</h1>
          <div className="hero-role hero-role-left"><span>Business Analyst</span><Arrow /></div>
          <div className="hero-role hero-role-right"><span>AI/ML Engineer</span><Arrow /></div>
        </div>
        <div className="hero-availability">
          <p><span className="availability-dot" />OPEN TO INTERNSHIPS &amp; FULL-TIME ROLES</p>
          <p>INDIA · OPEN TO HYBRID AND REMOTE WORK</p>
        </div>
        <div className="hero-statement-wrap">
          <img className="hero-photo hero-photo-left" src="/assets/omkar-bike.jpg" width="112" height="112" alt="Omkar with his motorcycle in the snow" style={{ objectPosition: "50% 25%" }} />
          <p className="hero-statement font-display">
            <span>Understanding the challenge.</span>
            <span>Finding the insight.</span>
            <span>Engineering the <span className="hero-highlight">solution.</span><span className="hero-flower" aria-hidden="true">✳</span></span>
          </p>
          <img className="hero-photo hero-photo-right" src="/assets/omkar-balcony.jpg" width="112" height="112" alt="Omkar looking out at the mountains" style={{ objectPosition: "50% 40%" }} />
        </div>
        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span>CONTACT ME</a>
          <a className="hero-button" href="/Omkar_Kumar_Resume_BA.pdf" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↓</span>RESUME</a>
        </div>
        <a className="hero-scroll font-hand" href="#projects"><FaArrowDown size={13} aria-hidden="true" />explore the work</a>
      </motion.div>
    </section>
  );
};

export default Hero;
