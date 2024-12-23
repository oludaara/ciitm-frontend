import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ciitmLogo.png'

const Navbar = () => {
  return (
    <nav className='max-lg:bg-red-500 w-full py-[2vh] fixed top-0 left-0 z-[99999] bg-white flex items-center justify-between px-10'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="flex gap-[2vw] text-[.9vw]">
            <Link to="/">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/students">Students</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        <div className="btns flex items-center justify-center gap-2">
            <button className='px-8 py-2 bg-[#333] text-white rounded-md'>Login</button>
            <button className='px-4 py-2 bg-[#F9F9F9] rounded-md'>Registration</button>
        </div>
    </nav>
  )
}

export default Navbar