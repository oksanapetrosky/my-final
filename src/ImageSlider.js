import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Data";
import './App';


function ImageSlider () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;

    function nextSlide() {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        // console.log("next");
    };

    function prevSlide() {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        // console.log("prev"); 
    }

     function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
     }

     useEffect(() => {
        setCurrentSlide(0);
     }, []
    );

     useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
     });
    
return (
      <div className="slider">
         <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
         <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, id) => {
            return (
                <div
                className={id === currentSlide ? "slide current" : "slide"}
                key={id}
                >
                   {id === currentSlide && (
                    <div>
                        <img src={slide.image} alt="slide" className="image" width="100%" height="800px" />
                    <div className="content">
                        <h1>Our New Fall Collection For You</h1>
                        <button className="--btn">Read more</button>
                    </div>
                   
                    </div>
                   )}
                </div>
            )
        })}
      </div>
     
  )
}

export default ImageSlider;