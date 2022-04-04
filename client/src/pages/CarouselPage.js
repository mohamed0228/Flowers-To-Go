import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const CarouselPage = () => {
  return (

<Carousel
  // swipeable={false}
  // draggable={false}
  // showDots={true}
  // responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  // infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  // keyBoardControl={true}
  // customTransition="all .5"
  // transitionDuration={500}
  // containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  // itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
  );
};
export default CarouselPage;
  
  