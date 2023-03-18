import React from "react"
import FirstChoiceImage from "../assets/first-choice-img.jpg"
import VideoImg from "../assets/video-img.jpg"
import { TbPhoneCall } from "react-icons/tb"

const Specialize = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[90%] mx-auto md:flex-row md:justify-between md:max-w[100%] xl:max-w-[1200px] md:mx-auto">
      <div>
        <img
          src={FirstChoiceImage}
          alt="Image"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col text-center justify-center items-center max-w-[500px] mx-auto md:justify-between md:items-start md:max-w-[500px] md:mx-auto md:text-left">
        <h1 className="text-2xl font-bold my-10 md:text-3xl xl:text-5xl">
          Your first choice for traveling anywhere
        </h1>
        <p className="leading-8 text-base md:py-5">
          Etiam quis lacus ac metus facilisis lobortis eget at tortororbi et
          arcu est. Duis convallis nisl eu vestibulum pellentesqe. Aenean non
          dui sapien. Mauris ornare.
        </p>
        <div className="bg-gray-100 rounded-lg my-5 md:flex md:items-center">
          <p className="font-bold text-gray-800 text-1xl py-10 md:px-5 md:text-lg md:font-base">
            We are specialized in providing a high quality service
          </p>
          <img
            src={VideoImg}
            alt="Video"
            className="max-w-full rounded-lg md:rounded-l-none"
          />
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
