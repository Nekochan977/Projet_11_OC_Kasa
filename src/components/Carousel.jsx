import "../styles/Carousel.css";
import { useState, useEffect } from "react";

function Carousel(props) {
    
  const { children } = props;

  // define a state for the current active index (currentIndex) and the total item that passed to the Carousel (length)
const [currentIndex, setCurrentIndex] = useState(0)
const [length, setLength] = useState(children.pictures.length)

// Set the length to match current children from props
useEffect(() => {
    setLength(children.pictures.length)
}, [children])
// ...

// function to handle when the control button is clicked
const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    } else {
      setCurrentIndex(0)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    } else {
      setCurrentIndex(length - 1)
    }
}
// ...
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={prev} className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content mx-auto"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children.pictures.map((picture, index) => (
              // console.log(picture),
              <div className="image-txt-wraper" key={index}>
                <img className="carousel-img" key={index} src={picture} />
                <p className="carousel-img-number">
                  {index + 1}/{children.pictures.length}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
