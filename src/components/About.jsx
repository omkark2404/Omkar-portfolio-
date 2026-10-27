import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[32px]"
      >
        {"I'm Omkar Kumar, a B.E. Electronics Engineering (VLSI) student at Thapar Institute of Engineering \u0026 Technology, Class of 2027. I am pursuing Business Analyst and AI/ML Engineer opportunities, with an interest in using Python, SQL and applied AI to understand business problems. My portfolio explores cloud-cost analysis, delivery decisions, document processing and ecommerce funnels."}
      </motion.p>
      <a href="https://www.linkedin.com/in/omkarkr/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-3.5 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl">View Professional Profile</a>
    </>
  );
};

export default SectionWrapper(About, "about");
