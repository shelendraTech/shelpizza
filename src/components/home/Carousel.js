import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "milkshake"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
          key={index}
          style={{ maxHeight: "18rem",overflow: "hidden" }} // Adjust max height as needed
          className="object-center brightness-50"
        >
          <Image
            src={`https://www.dominos.co.in/files/items/Main_Menu-NVG.jpg`}
            alt={image}
            width={300}
            height={200} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;