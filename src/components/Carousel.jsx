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
      url: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/406876243_122129327132040371_1109611255455707244_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xrq5577JQxsAX95Q3nC&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAxe3TZepetvgDra1XIiyQHZ27pYX3GzFw0mqHZugs7XA&oe=6578E1F7"
    },
    {
      url: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/399693433_122126921138040371_3521745544702845787_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=lkCI8Y7hArUAX_NhRYu&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBcu7DOs5w0RL8_cUMxrxJIQFkNAza4D91AoCAQCIN1uA&oe=6578CAE4"
    },
    {
      url: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/405160692_122129048192040371_4013936127249113815_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Q-LAiGKrm0IAX_fSN2F&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfD0e0zGOfjIVARbxTx4PYgIN6QnDgr9lK1ePPXSIVpu2Q&oe=657908FD"
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


 
