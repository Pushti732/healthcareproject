import React, { useState } from 'react'
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
//import { Carousel } from 'react-responsive-carousel';
import images from './images'

function MainComponent(props) 
{
  const [currentindex,setCurrentIndex]=useState(0);

  const nextSlide = () =>
  {
    setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to go to the previous image
  const prevSlide = () =>
   {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
  };

  

  return(
    <div class="slides">
   <button onClick={prevSlide} class="prev arrow">prev</button>
   <img  src={props.images[currentindex]}  alt=""/>
   <button onClick={nextSlide} class="next arrow">next</button>
   </div>
  );
  }
  


   /*<div className="carousel-container">
    <Carousel showArrows={true}>
    {
    props.navitems?props.navitems.map((image, index) => (
      <div key={index} className="carousel-slide">
        <img  src={image} alt={`Slide ${index}`} />
      </div>
    )):"no data available"
  }
  </Carousel>
  <button className="arrow prev">Previous</button>
  <button className="arrow next">Next</button>
  </div>*/