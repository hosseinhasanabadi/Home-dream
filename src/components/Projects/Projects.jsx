import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../../assets/assets";

function Projects() {
  const [currentTndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);
  useEffect(() => {
    const ubdateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    ubdateCardsToShow();
    window.addEventListener("resize", ubdateCardsToShow);
    return () => window.removeEventListener("resize", ubdateCardsToShow);
  }, []);
  const nexProjext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
   
    
  };
  const prevProjext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="contianer w-full mx-auto overflow-hidden 
   px-6  md:px-20 lg:px-32 my-20  "
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span
          className=" underline underline-offset-4 decoration-1 
        under font-light"
        >
          Completed
        </span>
      </h1>
      <p className=" text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Space,Building Legacies-Explore
      </p>

      {/*---------- slider----------- */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProjext}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer "
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nexProjext}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-8  transition-transform duration-500 
  ease-out"
          style={{
            transform: `translateX(-${(currentTndex * 100) / cardToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="
             w-full h-auto mb-14 "
              />
              <div
                className="absolute left-0 right-0 bottom-5 flex
              justify-center"
              >
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {project.price} <span className="px-1">|</span> <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
