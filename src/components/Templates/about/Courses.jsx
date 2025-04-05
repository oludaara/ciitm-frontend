import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export let Course_Card = () => {
   return (
      <div className='card-1 h-full w-[25%] max-[599px]:w-full px-2 py-3 border-[1px] border-black rounded-xl max-[1098px]:w-[40%]'>
         <div className='div w-full h-[35vh] rounded-xl bg-[#d9d9d9]'></div>
         <h1 className='py-2 text-[1.25vw] max-[599px]:text-[4.8vw] font-bold'>
            Masters of Communication Application
         </h1>
         <div className='flex items-center justify-between'>
            <p className=' text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>
               Duration
            </p>
            <p className='text-[#FF0000] underline text-[1vw] max-[599px]:text-[3.5vw] font-semibold'>
               4-Years
            </p>
            <button className='border-[1px] text-[1vw] max-[599px]:text-[3.5vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg'>
               Details
            </button>
         </div>
      </div>
   );
};

const Courses = () => {
   return (
      <section className='w-full px-10 py-20 max-[599px]:py-10 flex items-center justify-between flex-col gap-4'>
         <div className='title text-[#333] text-[3.5vw] max-[599px]:text-[10vw] font-bold font-[Montserrat]'>
            Our Courses
         </div>

         <p className='text text-[1vw] max-[599px]:text-[3vw] font-[Poppins] w-[40%] max-[599px]:w-[90%] text-center pb-8'>
            We have a group of eminent Faculty members with great
            personality and excellence in their specific domains.
         </p>

         <div className='cards w-full flex items-center justify-center  max-[599px]:flex-col gap-4 max-[599px]:hidden max-[1103px]:flex-wrap'>
            <Course_Card />
            <Course_Card />
            <Course_Card />
            <Course_Card />
         </div>

         <div className='w-full h-full hidden max-[599px]:block py-5'>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
               }}
               loop={true}
               modules={[Autoplay]}
               className='mySwiper'
            >
               <SwiperSlide>
                  <div className='card-1 h-full w-[25%] max-[599px]:w-full px-2 py-3 border-[1px] border-black rounded-xl'>
                     <div className='div w-full h-[35vh] rounded-xl bg-[#d9d9d9]'></div>
                     <h1 className='py-2 text-[1.25vw] max-[599px]:text-[4.8vw] font-bold'>
                        Masters of Communication Application
                     </h1>
                     <div className='flex items-center justify-between'>
                        <p className=' text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>
                           Duration
                        </p>
                        <p className='text-[#FF0000] underline text-[1vw] max-[599px]:text-[3.5vw] font-semibold'>
                           4-Years
                        </p>
                        <button className='border-[1px] text-[1vw] max-[599px]:text-[3.5vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg'>
                           Details
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='card-1 h-full w-[25%] max-[599px]:w-full px-2 py-3 border-[1px] border-black rounded-xl'>
                     <div className='div w-full h-[35vh] rounded-xl bg-[#d9d9d9]'></div>
                     <h1 className='py-2 text-[1.25vw] max-[599px]:text-[4.8vw] font-bold'>
                        Masters of Communication Application
                     </h1>
                     <div className='flex items-center justify-between'>
                        <p className=' text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>
                           Duration
                        </p>
                        <p className='text-[#FF0000] underline text-[1vw] max-[599px]:text-[3.5vw] font-semibold'>
                           4-Years
                        </p>
                        <button className='border-[1px] text-[1vw] max-[599px]:text-[3.5vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg'>
                           Details
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='card-1 h-full w-[25%] max-[599px]:w-full px-2 py-3 border-[1px] border-black rounded-xl'>
                     <div className='div w-full h-[35vh] rounded-xl bg-[#d9d9d9]'></div>
                     <h1 className='py-2 text-[1.25vw] max-[599px]:text-[4.8vw] font-bold'>
                        Masters of Communication Application
                     </h1>
                     <div className='flex items-center justify-between'>
                        <p className=' text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>
                           Duration
                        </p>
                        <p className='text-[#FF0000] underline text-[1vw] max-[599px]:text-[3.5vw] font-semibold'>
                           4-Years
                        </p>
                        <button className='border-[1px] text-[1vw] max-[599px]:text-[3.5vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg'>
                           Details
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='card-1 h-full w-[25%] max-[599px]:w-full px-2 py-3 border-[1px] border-black rounded-xl'>
                     <div className='div w-full h-[35vh] rounded-xl bg-[#d9d9d9]'></div>
                     <h1 className='py-2 text-[1.25vw] max-[599px]:text-[4.8vw] font-bold'>
                        Masters of Communication Application
                     </h1>
                     <div className='flex items-center justify-between'>
                        <p className=' text-[0.95vw] max-[599px]:text-[3.5vw] font-medium'>
                           Duration
                        </p>
                        <p className='text-[#FF0000] underline text-[1vw] max-[599px]:text-[3.5vw] font-semibold'>
                           4-Years
                        </p>
                        <button className='border-[1px] text-[1vw] max-[599px]:text-[3.5vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg'>
                           Details
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   );
};

export default Courses;
