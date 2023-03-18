import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu, AiTwotoneHome } from "react-icons/ai"
import { FcAbout, FcContacts } from "react-icons/fc"
import { MdOutlineHomeRepairService, MdOutlineRateReview } from "react-icons/md"
import { ImBlogger } from "react-icons/im"
import Logo from "../assets/taxi-logo.png"
import "./Styles/Hero.css"
const Navbar = () => {
  const [nav, setNav] = useState(true)
  const [color, setcolor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 200) {
      // console.log("90")
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed top-0 z-30 w-[100%] h-16 mx-auto">
      <div className={color ? "header header-bg" : "header"}>
        <img
          src={Logo}
          alt="Logo"
          className="w-[200px] -mt-[15px]"
        />
        <ul className="hidden lg:flex lists">
          <li className="navs">Home</li>
          <li className="navs">About</li>
          <li className="navs">Service</li>
          <li className="navs">Reviews</li>
          <li className="navs">Blogs</li>
          <li className="navs">Contacts</li>
          <li className="bg-amber-400 text-slate-900 rounded-md">
            <button>Book a Taxi</button>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="block -mt-10 lg:hidden"
        >
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-screen bg-[#2b2a2a] border-r border-r-gray-800 ease-in-out duration-500"
              : // ? "fixed flex flex-col bg-[#2b2a2a] text-white left-0 top-0 w-[30%] z-10 h-full ease-in-out duration-500"
                "fixed left-[-100%] ease-in-out duration-1000"
          }
          id="mobileList"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[200px] block lg:hidden"
          />
          <ul id="mobileList">
            <li className="list">
              <i className="pi pi-home"></i> Home
            </li>
            <li className="list">
              <i className="pi pi-info-circle"></i> About
            </li>
            <li className="list">
              <i className="pi pi-wrench"></i> Service
            </li>
            <li className="list">
              <i className="pi pi-comment"></i> Reviews
            </li>
            <li className="list">
              <i className="pi pi-megaphone"></i> Blogs
            </li>
            <li className="list">
              <i className="pi pi-users"></i> Contacts
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
