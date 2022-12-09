import "../styles/Carousel.css";
import { useState, useEffect } from "react";

function Carousel(props) {
    
  const { children } = props;

  // define a state for the current active index (currentIndex) and the total item that passed to the Carousel (length)
const [currentIndex, setCurrentIndex] = useState(0)
const [length, setLength] = useState(children.length)

// Set the length to match current children from props
useEffect(() => {
    setLength(children.length)
}, [children])
// ...

// function to handle when the control button is clicked
const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
}
// ...
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
      {/* condition to hide the control button when not needed */}
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
       
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content mx-auto"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {/* condition to hide the control button when not needed */}
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
       
      </div>
    </div>
  );
}

export default Carousel;
