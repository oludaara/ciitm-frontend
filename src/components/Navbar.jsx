import { TfiMenu } from "react-icons/tfi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {


  let Toggle_Open = () =>{

    let tl = gsap.timeline()
  
    tl.to('.open_menu', {
      display: 'none',
    })


    tl.to('.close_menu', {
      display: 'block',
    })

      tl.to('nav', {
        height: '100vh',
        duration : 0.5,
      })


 


  }


  let Toggle_Close = () =>{

    let tl = gsap.timeline()
  
    


    tl.to('.close_menu', {
      display: 'none',
    })

    tl.to('.open_menu', {
      display: 'block',
    })

      tl.to('nav', {
        height: '9vh',
        duration : 0.5,
      })


 


  }


  return (
    <nav className='w-full lg:py-[2vh] fixed top-0 left-0 bg-[#333] lg:bg-white flex flex-col lg:flex-row items-center justify-between lg:px-10 overflow-hidden lg:overflow-visible gap-7 lg:gap-0 h-[9vh] lg:h-auto z-50'>
        <div className="logo flex justify-between lg:justify-normal w-full h-fit lg:h-auto lg:w-auto px-3 py-2 lg:py-0 lg:px-0 bg-white">
            <img src={logo} alt="Ciitm Logo"  />
            <TfiMenu  className="open_menu lg:hidden text-2xl  rounded-full w-12 h-full p-2 bg-[#333] text-white" onClick={Toggle_Open}/>
            <AiFillCloseCircle  className="close_menu lg:hidden text-2xl  rounded-full w-12 h-full p-2 bg-[#333] text-white hidden" onClick={Toggle_Close}/>
        </div>
        <div className="flex gap-[2vw] text-2xl items-center mt-14 lg:mt-0 lg:items-start lg:text-[.9vw]  w-full  lg:w-fit flex-col lg:flex-row bg-[#333333] lg:bg-white text-white lg:text-black font-bold lg:font-normal">
            <Link to="/">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/students">Students</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        <div className="btns flex items-center justify-center gap-2 flex-col w-[80%] mb-[4.5vh] lg:w-auto lg:flex-row ">
            <button className='px-8 py-2 w-full bg-blue-600 lg:bg-[#333] text-white rounded-md'>Login</button>
            <button className='px-4 py-2 w-full bg-[#F9F9F9] rounded-md'>Registration</button>
        </div>
    </nav>
  )
}

export default Navbar