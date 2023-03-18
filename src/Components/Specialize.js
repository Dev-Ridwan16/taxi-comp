import React from "react"
import FirstChoiceImage from "../assets/first-choice-img.jpg"
import VideoImg from "../assets/video-img.jpg"
import { TbPhoneCall } from "react-icons/tb"

const Specialize = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[100%] md:flex-row md:justify-between md:w[100%] xl:max-w-[1200px] md:px-5">
      <div>
        <img
          src={FirstChoiceImage}
          alt="Image"
          className="rounded-lg md:mx-2"
        />
      </div>
      <div className="flex flex-col text-center justify-center items-center w-[500px] mx-auto md:items-start md:w-[500px] md:mx-10 md:text-left">
        <h1 className="text-2xl font-bold my-10 md:text-3xl xl:text-5xl">
          Your first choice for traveling anywhere
        </h1>
        <p className="leading-8 text-base md:py-5">
          Etiam quis lacus ac metus facilisis lobortis eget at tortororbi et
          arcu est. Duis convallis nisl eu vestibulum pellentesqe. Aenean non
          dui sapien. Mauris ornare.
        </p>
        <div className="bg-gray-100 rounded-lg flex flex-col justify-center items-center my-5 md:flex-row md:items-center">
          <p className="font-bold text-gray-800 text-1xl py-3 md:px-3 md:text-[16px] md:font-medium">
            We are specialized in providing a high quality service
          </p>
          <video
            src="https://www.youtube.com/embed/XHOmBV4js_E?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0&autoplay=1"
            className="w-full rounded-lg md:rounded-l-none"
          ></video>
        </div>
        <div className="flex flex-col justify-center items-center my-10 md:flex-row">
          <TbPhoneCall size={80} />
          <div className="my-5 md:ml-5">
            <p className="font-semibold">Call Us Now!</p>
            <h1 className="text-3xl font-bold mt-2">111 222 8888</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialize
