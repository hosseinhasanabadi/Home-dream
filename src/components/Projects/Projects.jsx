import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import useFeachData from "../../Api/useFeachData";

function Projects() {
  const {
    data: projects,
    loading,
    error,
  } = useFeachData("http://localhost:3000/projectsData", "GET");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projects.length);
      } else {
        setCardToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [projects]);

  const nextProject = () => {
    if (!projects || projects.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    if (!projects || projects.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p className="text-center">در حال دریافت داده‌ها...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full mx-auto overflow-hidden px-6 md:px-20 lg:px-32 my-20"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Space, Building Legacies - Explore
      </p>

      {/* Slider Controls */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span>{" "}
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
