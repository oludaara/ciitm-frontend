import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = () => {
  let loader = useRef()

useGSAP(() => {
  gsap.to(loader.current, {
    duration: 1,
    y: -2000,
    delay: 2,
    display: 'none'
  });
}, []);

  return (
    <div ref={loader} className='w-full h-screen bg-black text-white flex items-center z-[99999] justify-center cursor-none fixed top-0 left-0'>
        <h1>This Is Loader</h1>
    </div>
  )
}

export default Loader