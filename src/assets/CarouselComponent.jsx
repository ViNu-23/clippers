import React from 'react';
import { Carousel } from 'react-carousel';
import 'react-carousel/dist/react-carousel.css'; // Import CSS from the package

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="./shop1.jpg" alt="swiper" style={{ height: "480px", borderRadius: "8px" }} />
      </div>
      <div>
        <img src="./shop1.jpg" alt="swiper" style={{ height: "480px", borderRadius: "8px" }} />
      </div>
      <div>
        <img src="./shop1.jpg" alt="swiper" style={{ height: "480px", borderRadius: "8px" }} />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
