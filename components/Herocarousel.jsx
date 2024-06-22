"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const carouselImages = [
    {imgUrl: '/assets/images/image1.png', alt: 'car-1'},
    {imgUrl: '/assets/images/image2.png', alt: 'car-2'},
    {imgUrl: '/assets/images/image3.png', alt: 'car-3'},
    {imgUrl: '/assets/images/image4.png', alt: 'car-4'},
    {imgUrl: '/assets/images/image5.png', alt: 'car-5'},
]
const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel 
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}>
           {carouselImages.map((image) => (
            <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className='object-contain'
            key={image.alt}
            />
           ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel
