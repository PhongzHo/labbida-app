import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import React from 'react'

const Carousel = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1534463868211-1203a5c900a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/399693433_122126921138040371_3521745544702845787_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=lTgbY-AW_pEAX95LTLy&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCYITW6rW08vXJBOK-cnFdjYiG4FgnzmvlOeD6v4eRqAQ&oe=6572DC24"
    },
    {
      url: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405104366_122128680692040371_5842001436829768598_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=E5VaMAN2a6sAX98udpG&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBw0QHNDqI-hr1_Zd5A62EWiuu9VWJ0i76e0a91zEvTLg&oe=65739FE9"
    },
    {
      url: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/405160692_122129048192040371_4013936127249113815_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hSdL4NRexvkAX_tAmF1&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBACNNKtnxwKkcnJ8A3c4DMXmvl8JlWYBFKxCnXoQpT0g&oe=65731A3D"
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
    <div className="bg-black h-[780px] pt-28 relative w-full px-6 group">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
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


 
