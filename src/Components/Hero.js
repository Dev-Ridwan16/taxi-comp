import React, { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Navbar from "./Navbar"
import Taxi from "../assets/slider1.jpg"
import Taxi2 from "../assets/slider2.jpg"
import Taxi3 from "../assets/slider3.jpg"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
      //   url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider1.jpg",
      url: Taxi,
      text: "Taxi Company in NYC",
    },
    {
      //   url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider2.jpg",
      url: Taxi2,
      text: "Taxi Company in Ohio",
    },
    {
      //   url: "https://www.sktperfectdemo.com/themepack/taxi/wp-content/themes/skt-taxi/images/slides/slider3.jpg",
      url: Taxi3,
      text: "Taxi Company in Texas",
    },
  ]
  // const wrapper = document.querySelector(".wrapper")
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = (i) => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    // wrapper.style.marginLeft = `${-100 * currentIndex}%`
    setCurrentIndex(newIndex)
  }
  // Auto slide
  //   setInterval(nextSlide())
  setInterval(nextSlide, 7000)
  return (
    <div>
      <div className="w-full h-[50%] md:h-[50%] xl:h-full  text-slate-100 text-center">
        <div className="w-full h-full  relative">
          <Navbar />
          <div className=" absolute w-full h-screen"></div>
          <img
            className="w-full h-[500px] md:h-[480px] object-cover xl:h-screen"
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
            <p className="text-amber-400 text-[24px] font-bold my-2 md:text-lg md:font-medium">
              Most Trusted
            </p>
            <h1 className="text-4xl md:text-4xl md:my-3 font-bold my-4">
              {slides[currentIndex].text}
            </h1>
            <button className="border rounded-full py-4 px-10 mt-8 bg-slate-100 text-gray-900 font-bold md:font-medium">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
