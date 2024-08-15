import React, { useState, useEffect } from "react";
import dataprojects from "../../data/dataProjects";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

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
    <div id="projets" className="carousel">
      <h1 className="projects-title">Mes projets</h1> {/* Ajout du titre ici */}
      <div className="carousel-slide">
        <img src={dataprojects[currentIndex].cover} alt={dataprojects[currentIndex].title} className="carousel-image" />
        <div className="carousel-text">
          <h2>{dataprojects[currentIndex].title}</h2>
          <p>{dataprojects[currentIndex].description}</p>
          <a href={dataprojects[currentIndex].link}>Link</a>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-arrow">&#9664;</button>
        {dataprojects.map((project, index) => (
          <input
            key={project.id}
            type="radio"
            name="carousel"
            className="carousel-radio"
            checked={index === currentIndex}
            onChange={() => handleSlideChange(index)}
          />
        ))}
        <button onClick={nextSlide} className="carousel-arrow">&#9654;</button>
      </div>
    </div>
  );
};

export default Carousel;
