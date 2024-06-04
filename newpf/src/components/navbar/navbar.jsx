import React, { useState, useEffect } from 'react';


function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Changer cette valeur en fonction de la largeur considérée comme mobile
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <h1>Julie Cohen</h1>
      {isMobile ? (
        <button className="burger-icon" onClick={toggleMenu}>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        </button>
      ) : (
        <div className="links">
          <a href="#a-propos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
        </div>
      )}
      {isOpen && (
        <div className="menu">
          <a href="#a-propos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
