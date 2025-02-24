import "./carousel.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Gestion de la navigation au clavier
  const handleKeyDown = (event) => {
    event.preventDefault(); // Empêche le défilement de la page
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  };

  // Si une seule image : pas de boutons ni de compteur
  if (images.length === 1) {
    return (
      <div className="carousel">
        <div className="slides">
          <img src={images[0]} alt={`Slide ${1}`} className="slide" />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel" onKeyDown={handleKeyDown} tabIndex="0">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <button className="prevButton" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} className="slideChevron" />
      </button>
      <button className="nextButton" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className="slideChevron" />
      </button>
      <h5>
        {currentIndex + 1}/{images.length}
      </h5>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
