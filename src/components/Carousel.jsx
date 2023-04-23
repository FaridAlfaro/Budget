import React, { useState } from "react";
function Carousel ({ images }) {

        const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
        const handleNextImage = () => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length);
        };
      
        const handlePrevImage = () => {
          setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
          );
        };
      
        return (
          <div className="carousel-container" data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
            <img
              className="carousel-image current-image"
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            />
            <img
              className="carousel-image next-image"
              src={
                images[(currentImageIndex + 1) % images.length]
              }
              alt={`Image ${currentImageIndex + 2}`}
            />
            <button className="carousel-button left" onClick={handlePrevImage}>
              {"<"}
            </button>
            <button className="carousel-button right" onClick={handleNextImage}>
              {">"}
            </button>
          </div>
        );
      };


export default Carousel;