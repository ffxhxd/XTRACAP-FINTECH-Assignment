import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className="fixed right-8 bg-indigo-800 p-2 rounded-full bottom-8 cursor-pointer z-10 hover:scale-110"
    >
      <FaArrowUp className="animate-pulse" fill="white" size={40} />
    </div>
  );
};

export default ScrollToTop;
