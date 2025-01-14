import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Teachers = () => {
  return (

    <section className='w-full px-10 py-10 max-[599px]:py-6 flex items-center justify-between gap-4 flex-col bg-[#333] text-white overflow-hidden'>

        <div className="title text-[3.5vw] font-semibold max-[599px]:text-[10vw]">Our Teachers</div>

        <p className="text text-[1.3vw] w-[50%] max-[599px]:w-full max-[599px]:font-light text-center max-[599px]:text-[3.3vw]">We have a group of eminent Faculty members with great personality and excellence in their specific domains.</p>

        <div className="cards w-full h-full py-4 flex justify-center gap-10 max-[599px]:flex-col max-[599px]:hidden">


            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>

            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>

            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>

            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>

        </div>

        <div className='w-full h-full hidden max-[599px]:block py-10'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

<div className="img w-full h-[23vh] bg-black rounded-xl"></div>

<h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

<div className="list w-full">
<div className='flex w-full items-center justify-between'>
    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
</div>
<div className='flex w-full items-center justify-between'>
    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
</div>
<div className='flex w-full items-center justify-between'>
    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
</div>
</div>

<div className="social w-full flex items-center justify-between">
    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
    <div className="profile flex">
        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
    </div>
</div>

<button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card w-[25%] max-[599px]:w-full h-full bg-white text-black flex items-start p-4 justify-between flex-col gap-2 rounded-xl">

                <div className="img w-full h-[23vh] bg-black rounded-xl"></div>

                <h1 className='text-[1.2vw] max-[599px]:text-[4.8vw] font-medium'>Deputy Commissioner of IT</h1>

                <div className="list w-full">
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Gulam Mustafa</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>PHD in IT</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Experience </p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>10 Years</p>
                </div>
                <div className='flex w-full items-center justify-between'>
                    <p className='text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>Specialization</p>
                    <p className='text-[0.85vw] max-[599px]:text-[3.2vw] font-bold'>In Python</p>
                </div>
                </div>

                <div className="social w-full flex items-center justify-between">
                    <h1 className='w-1/2 text-[0.95vw] max-[599px]:text-[3.5vw] font-bold'>Social Media accounts</h1>
                    <div className="profile flex">
                        <img src='https://img.icons8.com/bubbles/32/000000/facebook-new.png' alt='facebook' />
                        <img src='https://img.icons8.com/bubbles/32/000000/instagram-new.png' alt='instagram' />
                        <img src='https://img.icons8.com/bubbles/32/000000/x.png' alt='twitter' />
                        <img src='https://img.icons8.com/bubbles/32/000000/linkedin.png' alt='linkedin' />
                    </div>
                </div>

                <button className='bg-[#333] text-[0.95vw] max-[599px]:text-[3.5vw] font-semibold w-full text-white rounded-lg py-2 px-6'>Contact me</button>

            </div>
        </SwiperSlide>
      </Swiper>
        </div>

    </section>
  )
}

export default Teachers