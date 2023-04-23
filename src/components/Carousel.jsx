
// function Carousel() {
//   const images = [
//     {
//       src: 'https://i.ibb.co/k1BfGw3/1.png',
//       alt: 'Static Image 1',
//     },
//     {
//       src: 'https://i.ibb.co/f2fCh9T/2.png',
//       alt: 'Static Image 2',
//     },
//     {
//       src: 'https://i.ibb.co/CBHDSXp/3.png',
//       alt: 'Static Image 3',
//     }
//   ];
//   return (
//     <section className="main-slider">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`item image`}
//           style={image.style}
//         >
//           <span className="loading">Loading...</span>
//           <figure>
//             <div className="slide-image slide-media">
//               <img src={image.src} alt={image.alt} />
//             </div>
//             <figcaption className="caption">{image.alt}</figcaption>
//           </figure>
//         </div>
//       ))}
//       <button className="prev">Previous</button>
//       <button className="next">Next</button>
//     </section>
//   );
// }

// export default Carousel;


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
          <div className="carousel-container">
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