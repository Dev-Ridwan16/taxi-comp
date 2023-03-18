import React, { useState } from "react"
import "./Styles/Testimonial.css"
import Incredible from "../assets/Incredible-top-img.jpg"
import Slider1 from "../assets/slider1.jpg"
import Img1 from "../assets/larryPage.jpg"
import Img2 from "../assets/markZuckerberg.jpg"
import Img3 from "../assets/elonMusk.jpg"
import { AiOutlineDashboard, AiOutlineBook } from "react-icons/ai"
import { MdFingerprint } from "react-icons/md"
import { FaQuoteRight } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx"
import { IoMdCall } from "react-icons/io"

const Testimonial = () => {
  let [currentSLide, setCurrentSlide] = useState(0)
  const slides = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorum praesentium autem rerum sequi, facilis nam, ullam nesciunt maxime blanditiis distinctio rem quo alias vel in!",
      img: Img1,
      name: "Larry page",
      company: "Founder @Google",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorum praesentium autem rerum sequi, facilis nam, ullam nesciunt maxime blanditiis distinctio rem quo alias vel in!",
      img: Img2,
      name: "Mark Zuckerberg",
      company: "Founder @Facebook",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorum praesentium autem rerum sequi, facilis nam, ullam nesciunt maxime blanditiis distinctio rem quo alias vel in!",
      img: Img3,
      name: "Elon Musk",
      company: "Founder @SpaceX",
    },
  ]
  const goToSlides = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <div className="flex flex-col justify-center items-center xl:flex-row">
      <div className="flex flex-col items-center mx-auto text-center px-4 md:w-[650px] md:text-left md:items-start xl:w-[1000px] xl:px-16">
        <img
          src={Incredible}
          alt="image"
          className="w-full rounded-xl md:w-[550px]"
        />
        <h1 className="text-gray-800 text-2xl font-bold pt-16 xl:text-4xl">
          Incredible Destinations at Incredible Deals
        </h1>
        <p className=" text-[17px] leading-7 text-slate-700 pt-5">
          Posuere tellus imperdiet facilisis. Curabitur vaucibings telluseu
          semper nunc finibus placerat. uspendis and potenti. Praesent vel sem
          in sem. Curabitur vehiculay vitae ex id lacinia usced dapibus.
        </p>
        <div className="flex flex-col text-center md:flex-row md:justify-between md:text-left">
          <div className="incredible">
            <AiOutlineDashboard className="icons" />
            <h2 className="incredible-text">Surge Free Guarantee</h2>
          </div>
          <div className="incredible">
            <AiOutlineBook className="icons" />
            <h2 className="incredible-text">Book for Now or Later</h2>
          </div>
          <div className="incredible">
            <MdFingerprint className="icons" />
            <h2 className="incredible-text">Cashless Payment</h2>
          </div>
        </div>
      </div>

      <div className="text-slate-100 md:w-full">
        <div className="w-full relative flex flex-col justify-center items-center">
          <div className="absolute w-full h-full wrapper bg-neutral-900 bg-opacity-80 "></div>
          <img
            className="object-cover h-screen slideImg"
            src={Slider1}
          />
          <div className="absolute mx-auto top-0 py-16 flex flex-col justify-center items-center xl:items-start xl:w-[500px]">
            <h1 className="text-3xl font-bold text-center xl:text-4xl xl:text-left">
              What our customers are saying
            </h1>
            <div className="container w-[450px] mt-12 bg-neutral-700 rounded-xl overflow-hidden">
              <div className="wrapper mx-auto flex transition-all">
                <div className="sliderow flex justify-center items-center">
                  <div className="slidecol">
                    <div className="review py-10 md:pb-0">
                      {slides[currentSLide].review}
                    </div>
                    <div className="quote-div">
                      <FaQuoteRight className="quote-icon" />
                    </div>
                    <div className="flex flex-col justify-center items-center md:flex-row">
                      <div className="testimonail-image">
                        <img
                          src={slides[currentSLide].img}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full"
                        />
                      </div>
                      <div className="flex- flex-col text-center">
                        <h2 className="name font-bold text-base my-2">
                          {slides[currentSLide].name}
                        </h2>
                        <p className="work-place text-neutral-300">
                          {slides[currentSLide].company}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {slides.map((slide, slideIndex) => (
                        <div
                          key={slideIndex}
                          onClick={() => goToSlides(slideIndex)}
                          className="text-2xl py-5"
                        >
                          <RxDotFilled />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full py-10 h-auto bg-yellow-400 text-gray-900 md:py-2">
            <div className="flex flex-col justify-center items-center text-center mt-10">
              <IoMdCall size={80} />
              <div className="flex flex-col">
                <p className="text-lg font-medium">Call Us Now!</p>
                <h1 className="text-4xl mt-1 font-bold">111 222 8888</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
