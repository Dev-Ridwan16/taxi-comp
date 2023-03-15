import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu, AiTwotoneHome } from "react-icons/ai"
import { FcAbout, FcContacts } from "react-icons/fc"
import { MdOutlineHomeRepairService, MdOutlineRateReview } from "react-icons/md"
import { ImBlogger } from "react-icons/im"
import Logo from "../assets/taxi-logo.png"
import "./Styles/Hero.css"
const Navbar = () => {
  const [nav, setNav] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleNav = () => {
    setNav(!nav)
  }
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
    // alert(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="fixed z-30 w-[100%] h-16 mx-auto left-0 right-0">
      <div className="flex flex-row justify-between items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-[200px] -mt-[15px]"
        />
        <ul className="hidden md:flex lists">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Reviews</li>
          <li>Blogs</li>
          <li>Contacts</li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden"
        >
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            !nav
              ? "fixed flex flex-col bg-slate-500 text-black left-0 top-14 w-[100%] z-10 text-start h-auto ease-in-out duration-500"
              : "fixed top-[-100%] ease-in-out duration-1000"
          }
          id="mobileList"
        >
          <li className="list flex justify-center items-center">
            {/* <AiTwotoneHome
              size={15}
              //   className="mr-5 "
            /> */}
            Home
          </li>
          <li className="list">
            {/* <FcAbout
              size={15}
              //   className="mr-5 "
            />{" "} */}
            About
          </li>
          <li className="list">
            {/* <MdOutlineHomeRepairService
              size={15}
              //   className="mr-5 "
            />{" "} */}
            Service
          </li>
          <li className="list">
            {/* <MdOutlineRateReview
              size={15}
              //   className="mr-5 "
            />{" "} */}
            Reviews
          </li>
          <li className="list">
            {/* <ImBlogger
              size={15}
              //   className="mr-10 "
            />{" "} */}
            Blogs
          </li>
          <li className="list">
            {/* <FcContacts
              size={15}
              //   className="mr-5 "
            />{" "} */}
            Contacts
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
