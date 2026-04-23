import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const reveal = () => {
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
          sec.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);
};