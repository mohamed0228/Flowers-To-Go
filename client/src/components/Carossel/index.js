import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
                <Carousel infiniteLoop autoPlay>
            <div>
                <img src="./images/Birthday/BrightBdayBomb.jpg" />
            </div>
            <div>
                <img src= './images/Birthday/RadianceBdayBomb.jpg'/>
            </div>
            <div>
                <img src="./images/Birthday/MarmaladeBdayBomb.jpg" />
            </div>
           

      





            </Carousel>
        </div>
    );
}





