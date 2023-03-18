import React from "react"
import "primeicons/primeicons.css"
import "./Styles/SecService.css"

const SecService = () => {
  return (
    <div className="flex flex-col mt-20 md:flex-row md:-mt-20 md:w-[800px] xl:w-[1240px] justify-center items-center max-w-[90%] mx-auto left-0 right-0 md:relative xl-relative">
      <div className="secLists">
        <i className="pi pi-dollar"></i>
        <p>Best Price</p>
        <h1>Guaranteed</h1>
      </div>
      <div className="secLists">
        <i className="pi pi-clock"></i>
        <p>24/7 Customer</p>
        <h1>Care Service</h1>
      </div>
      <div className="secLists">
        <i className="pi pi-home"></i>
        <p>Home</p>
        <h1>Pickups</h1>
      </div>
      <div className="secLists">
        <i className="pi pi-calendar"></i>
        <p>Easy</p>
        <h1>Bookings</h1>
      </div>
    </div>
  )
}

export default SecService
