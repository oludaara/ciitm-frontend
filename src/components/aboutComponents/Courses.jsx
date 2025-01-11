import React from 'react'

const Courses = () => {
  return (
    <section className='w-full px-10 py-20 flex items-center justify-between flex-col gap-4'>

      <div className="title text-[#333] text-[3.5vw] font-bold font-[Montserrat]">Our Courses</div>
      
      <p className="text text-[1vw] font-[Poppins] w-[40%] text-center pb-8">We have a group of eminent Faculty members with great personality and excellence in their specific domains.</p>

      <div className="cards w-full flex items-center justify-between gap-4">

        <div className="card-1 h-full w-[25%] px-2 py-3 border-[1px] border-black rounded-xl">
            <div className="div w-full h-[35vh] rounded-xl bg-[#d9d9d9]"></div>
            <h1 className='py-2 text-[1.25vw] font-bold'>Masters of Communication Application</h1>
            <div className='flex items-center justify-between'>
                <p className=' text-[0.95vw] font-medium'>Duration</p>
                <p className='text-[#FF0000] underline text-[1vw] font-semibold'>4-Years</p>
                <button className="border-[1px] text-[1vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg">Details</button>
            </div>
        </div>

        <div className="card-2 h-full w-[25%] px-2 pt-3 pb-4 border-[1px] border-black rounded-xl">
        <div className="div w-full h-[35vh] rounded-xl bg-[#d9d9d9]"></div>
            <h1 className='py-2 text-[1.25vw] font-bold'>Masters of Communication Application</h1>
            <div className='flex items-center justify-between'>
                <p className=' text-[0.95vw] font-medium'>Duration</p>
                <p className='text-[#FF0000] underline text-[1vw] font-semibold'>4-Years</p>
                <button className="border-[1px] text-[1vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg">Details</button>
            </div>
        </div>

        <div className="card-3 h-full w-[25%] px-2 pt-3 pb-4 border-[1px] border-black rounded-xl">
        <div className="div w-full h-[35vh] rounded-xl bg-[#d9d9d9]"></div>
            <h1 className='py-2 text-[1.25vw] font-bold'>Masters of Communication Application</h1>
            <div className='flex items-center justify-between'>
                <p className=' text-[0.95vw] font-medium'>Duration</p>
                <p className='text-[#FF0000] underline text-[1vw] font-semibold'>4-Years</p>
                <button className="border-[1px] text-[1vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg">Details</button>
            </div>
        </div>

        <div className="card-4 h-full w-[25%] px-2 pt-3 pb-4 border-[1px] border-black rounded-xl">
        <div className="div w-full h-[35vh] rounded-xl bg-[#d9d9d9]"></div>
            <h1 className='py-2 text-[1.25vw] font-bold'>Masters of Communication Application</h1>
            <div className='flex items-center justify-between'>
                <p className=' text-[0.95vw] font-medium'>Duration</p>
                <p className='text-[#FF0000] underline text-[1vw] font-semibold'>4-Years</p>
                <button className="border-[1px] text-[1vw] border-[#d7d7d7] bg-[#F9F9F9] text-[#333] py-[7px] px-[27px] rounded-lg">Details</button>
            </div>
        </div>

      </div>

    </section>
  )
}

export default Courses