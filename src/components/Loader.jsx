import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';

const Loader = () => {
  let loader = useRef();

  useGSAP(() => {
    gsap.to(loader.current, {
      duration: 1,
      y: -2000,
      delay: 2,
      display: 'none',
    });
  }, []);

  return (
    <div
      ref={loader}
      className='w-full h-screen bg-black text-white flex items-center justify-center z-[99999] cursor-none fixed top-0 left-0'
    >
      <div className='flex flex-col items-center gap-8'>
        <div className='flex items-center justify-center relative w-[80px] h-[80px] max-[599px]:w-[60px] max-[599px]:h-[60px] md:w-32 md:h-32'>
          <div className='absolute w-full h-full border-8 border-t-white border-r-white/50 border-b-white/30 border-l-white/10 rounded-full animate-spin'></div>
          <div className='absolute w-full h-full border-8 border-t-transparent border-r-white border-b-white/50 border-l-white/30 rounded-full animate-spin-slow'></div>
        </div>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-2xl max-[599px]:text-xl md:text-3xl font-bold font-[Montserrat] animate-pulse'>
            Loading
          </h1>
          <p className='text-base max-[599px]:text-sm md:text-lg font-[Poppins] text-gray-400'>
            Please wait while we prepare
            everything
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
