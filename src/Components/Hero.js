import React, { useState } from "react"
import Taxi from "../assets/slider1.jpg"
import Navbar from "./Navbar"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
// import { useState } from "react"
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
      url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider1.jpg",
      text: "Taxi Company in NYC",
    },
    {
      url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider2.jpg",
      text: "Taxi Company in Ohio",
    },
    {
      url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider3.jpg",
      text: "Taxi Company in Texas",
    },
  ]
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  // Auto slide
  //   setInterval(nextSlide())
  setInterval(nextSlide, 7000)
  return (
    <div>
      <div className="w-full h-screen text-slate-100 text-center">
        <div className="w-full h-full relative">
          <Navbar />
          <div className="absolute w-full h-screen ease-in-out duration-700"></div>
          <img
            className="w-full h-screen object-cover slideImg "
            src={slides[currentIndex].url}
          />
          <div className="flex flex-row justify-between absolute px-10 top-[50%] cursor-pointer left-0 right-0 z-10">
            <FaAngleLeft
              size={20}
              onClick={prevSlide}
              className="control"
            />
            <FaAngleRight
              size={20}
              onClick={nextSlide}
              className="control"
            />
          </div>
          <div className="absolute w-full top-[40%]">
            <p className="text-amber-400 text-[24px] font-bold">Most Trusted</p>
            <h1 className="text-[75px] font-extrabold">
              {slides[currentIndex].text}
            </h1>
            <button className="border rounded-full py-4 px-10 mt-5 bg-slate-100 text-gray-900 font-bold">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
