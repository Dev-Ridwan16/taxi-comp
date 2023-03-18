import React from "react"
import { MdOutlineLocationOn, MdCarRental } from "react-icons/md"
import { GiPathDistance } from "react-icons/gi"
import { BsAirplaneEngines, BsTaxiFront } from "react-icons/bs"
import "./Styles/Offer.css"

const Offer = () => {
  return (
    <div className="bg-gray-100 h-auto">
      <div className="flext flex-col justify-center items-center mx-auto text-center py-16">
        <p className=" font-normal text-xl my-5 xl:font-medium">
          Our Best Cars
        </p>
        <h1 className="text-gray-900 text-3xl font-extrabold xl:text-5xl">
          What we offer?
        </h1>
        <div className="flex flex-col text-center justify-center items-center mt-14 xl:flex xl:flex-row md:grid md:grid-cols-2 md:gap-10 md:px-10">
          <div className="offers">
            <MdOutlineLocationOn size={80} />
            <h1 className="offer-header">Address Pickup</h1>
            <p className="offer-text">
              We offer taxi tours of various durations and complexity.
            </p>
          </div>
          <div className="offers">
            <BsAirplaneEngines size={80} />
            <h1 className="offer-header">Airport Transfer</h1>
            <p className="offer-text">
              We offer taxi tours of various durations and complexity.
            </p>
          </div>
          <div className="offers">
            <GiPathDistance size={80} />
            <h1 className="offer-header">Long Distance</h1>
            <p className="offer-text">
              We offer taxi tours of various durations and complexity.
            </p>
          </div>
          <div className="offers">
            <BsTaxiFront size={80} />
            <h1 className="offer-header">Taxi Tours</h1>
            <p className="offer-text">
              We offer taxi tours of various durations and complexity.
            </p>
          </div>
        </div>
        <button className="bg-amber-400 text-gray-900 text-lg font-bold py-5 px-10 rounded-full mt-10 hover:bg-gray-900 hover:transition hover:duration-700 hover:text-slate-100 hover:ease-in-out ">
          View All Services
        </button>
      </div>
    </div>
  )
}

export default Offer
