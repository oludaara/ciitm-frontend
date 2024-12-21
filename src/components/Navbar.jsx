import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-[2vh] fixed top-0 left-0 bg-white flex items-center justify-between px-10'>
        <div className="logo">
            <h1 className='text-[1.8vw]'>CIITM</h1>
        </div>
        <div className="links">
            <ul className='flex items-center justify-center gap-6'>
                <li>Home</li>
                <li>About US</li>
                <li>Gallery</li>
                <li>Students</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="btns flex items-center justify-center gap-2">
            <button className='px-8 py-2 bg-[#333] text-white rounded-md'>Login</button>
            <button className='px-4 py-2 bg-[#F9F9F9] rounded-md'>Registration</button>
        </div>
    </nav>
  )
}

export default Navbar