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
  // setInterval(goToSlides, 5000)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center px-4 pt-16">
        <img
          src={Incredible}
          alt="image"
          className="w-full rounded-xl"
        />
        <h1 className="text-gray-800 text-2xl font-bold pt-16">
          Incredible Destinations at Incredible Deals
        </h1>
        <p className="text-lg text-slate-700 pt-5">
          Posuere tellus imperdiet facilisis. Curabitur vaucibings telluseu
          semper nunc finibus placerat. uspendis and potenti. Praesent vel sem
          in sem. Curabitur vehiculay vitae ex id lacinia usced dapibus.
        </p>
        <div className="flex flex-col justify-center items-center text-center ">
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
      <div className="text-slate-100">
        <div className="w-full h-full relative ">
          <div className="absolute w-full h-full wrapper"></div>
          <img
            className="object-cover h-auto slideImg "
            src={Slider1}
          />
          <div className="absolute mx-auto top-24 flex flex-col justify-center items-center bg-neutral-900 bg-opacity-70 bg-transparent">
            <h1 className="text-3xl font-bold text-center">
              What our customers are saying
            </h1>
            <div className="container w-[450px] h-auto mt-12 bg-neutral-700 rounded-xl overflow-hidden">
              <div className="wrapper mx-auto flex my-16">
                <div className="sliderow flex justify-center items-center ease-in duration-1000">
                  <div className="slidecol ">
                    <div className="review">{slides[currentSLide].review}</div>
                    <div className="quote-div">
                      <FaQuoteRight className="quote-icon" />
                    </div>
                    <div className="flex flex-col justify-center items-center my-10">
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
                          className="text-4xl px-0 "
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
          <div className="absolute top-[850px] py-2 h-auto bg-amber-400 text-gray-900">
            <div className="flex justify-center items-center mt-10">
              <IoMdCall size={80} />
              <div className="flex flex-col">
                <p className="text-[18px] font-medium">Call Us Now!</p>
                <h1 className="text-[35px] mt-1 font-bold">111 222 8888</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
