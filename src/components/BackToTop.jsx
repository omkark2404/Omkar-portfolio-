import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

/** Yellow "back to top" square that appears once the hero is scrolled past. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center border-2 border-ink bg-noteyellow text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <FaArrowUp size={15} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
