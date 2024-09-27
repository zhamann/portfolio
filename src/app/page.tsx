"use client";

import { useEffect, useState } from "react";

import LandingPage from "./_components/LandingPage";
import ProjectsPage from "./_components/ProjectsPage";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 2 && currentPage === 1) {
        handleChange(2);
      } else if (scrollPosition < windowHeight / 2 && currentPage === 2) {
        handleChange(1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  function handleChange(page: number) {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsFading(false);
    }, 500);
  }

  return (
    <div className="relative h-[200svh]">
      <div className="sticky top-0 h-svh">
        <div
          className={`transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          {currentPage === 1 ? <LandingPage /> : <ProjectsPage />}
        </div>
      </div>
    </div>
  );
}
