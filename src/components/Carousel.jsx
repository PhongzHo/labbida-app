import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import React from 'react'

const Carousel = () => {
  const slides = [
    {
      url: "https://i.imgur.com/VMkzTVi.jpg"
    },
    {
      url: "https://i.imgur.com/JZ0OLTb.jpg"
    },
    {
      url: "https://i.imgur.com/HG1Wy6I.jpg"
    },
    {
      url: "https://i.imgur.com/oDSU6it.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(3)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="bg-black lg:h-[780px] md:h-[490px]  aspect-auto pt-28 relative w-full px-6 group">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-auto h-full rounded-2xl bg-center bg-cover shadow-xl dark:shadow-gray-800 duration-500">
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 p-4 text-white cursor-pointer">
      <BsChevronCompactLeft onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 p-4 text-white cursor-pointer">
      <BsChevronCompactRight onClick={nextSlide} />
      </div>
      <div className="flex justify-center py-1">
        {slides.map((slide, slideIndex) => (
          <div 
          key={slideIndex}
          onClick={() => {goToSlide(slideIndex)}}
          className="text-white text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel


 
