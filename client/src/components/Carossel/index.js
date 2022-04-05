import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
                <Carousel infiniteLoop autoPlay>
            <div>
                <img src="./images/carouseleaster.jpg" alt='PKC'/>
            </div>
            <div>
                <img src= './images/carouselgrad.jpg' alt='CD'/>
            </div>
            <div>
                <img src="./images/carouselmom.jpg" alt='FF'/>
            </div>
           

      





            </Carousel>
        </div>
    );
}





