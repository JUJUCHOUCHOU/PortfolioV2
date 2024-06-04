import React, { useState, useEffect } from "react";
import dataprojects from "../../data/dataProjects";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change here for 5 seconds interval

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataprojects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === dataprojects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="projets">
      <div>
        <button onClick={prevSlide}>&#9664;</button> {/* Left arrow */}
        {dataprojects.map((project, index) => (
          <input
            key={project.id}
            type="radio"
            name="carousel"
            checked={index === currentIndex}
            onChange={() => handleSlideChange(index)}
          />
        ))}
        <button onClick={nextSlide}>&#9654;</button> {/* Right arrow */}
      </div>
      <div>
        <img src={dataprojects[currentIndex].cover} alt={dataprojects[currentIndex].title} />
        <h2>{dataprojects[currentIndex].title}</h2>
        <p>{dataprojects[currentIndex].description}</p>
        <a href={dataprojects[currentIndex].link}>Link</a>
      </div>
    </div>
  );
};

function Projects() {
  return <Carousel />;
}

export default Projects;
