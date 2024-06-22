"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const carouselImages = [
  { imgUrl: "/assets/img-1.png", alt: "img-1" },
  { imgUrl: "/assets/img-2.png", alt: "img-2" },
  { imgUrl: "/assets/img-3.jpg", alt: "img-3" },
  { imgUrl: "/assets/img-4.jpg", alt: "img-4" },
  { imgUrl: "/assets/img-5.jpg", alt: "img-5" },
  { imgUrl: "/assets/img-6.jpg", alt: "img-6" },
];
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
        className="w-full h-[200px]"
      >
        {carouselImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain w-fit h-fit"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
