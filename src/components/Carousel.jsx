
function Carousel() {
  const images = [
    {
      src: '../../img/header/1.png',
      alt: 'Static Image 1',
    },
    {
      src: '../../img/header/2.png',
      alt: 'Static Image 2',
    },
    {
      src: '../../img/header/3.png',
      alt: 'Static Image 3',
    }
  ];
  return (
    <section className="main-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`item image`}
          style={image.style}
        >
          <span className="loading">Loading...</span>
          <figure>
            <div className="slide-image slide-media">
              <img src={image.src} alt={image.alt} />
            </div>
            <figcaption className="caption">{image.alt}</figcaption>
          </figure>
        </div>
      ))}
      <button className="prev">Previous</button>
      <button className="next">Next</button>
    </section>
  );
}

export default Carousel;