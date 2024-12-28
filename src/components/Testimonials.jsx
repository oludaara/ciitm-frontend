import React from 'react'

const Testimonials = () => {
  return (
    <section className='w-full py-10 px-6 text-white bg-[#333] flex items-center max-[599px]:items-start max-[599px]:flex-col justify-center overflow-hidden'>

        <div className="left-txts h-full w-[35%] max-[599px]:w-full flex flex-col justify-center items-start">
                <h1 className='text-[4vw] max-[599px]:text-[8vw] leading-tight font-semibold'>Transforming Lives, One Story at a Time!</h1>
                <p className='text-[1vw] max-[599px]:text-[3.5vw] font-light my-2 w-[65%] max-[599px]:w-full'>See why students love learning with us and how we’ve made a difference in their journeys. </p>
        </div>

        <div className="right-cards h-full w-[65%] max-[599px]:w-full flex items-center max-[599px]:flex-col justify-between gap-6">
            <div className="card w-[35vw] max-[599px]:w-full h-[17vw] max-[599px]:h-full bg-white flex items-start justify-between gap-2 flex-col text-black rounded-xl px-4 py-6">
                <div className="profile flex items-start justify-start gap-2">
                    <div className="image w-[3.5vw] max-[599px]:w-[12vw] h-[3.5vw] max-[599px]:h-[12vw] rounded-full overflow-hidden">
                    <img className='w-full h-full object-cover' src="" alt="" />
                    </div>
                    <div className="txts">
                        <h1 className="name text-[1.5vw] max-[599px]:text-[5vw] font-semibold leading-tight">John Doe</h1>
                        <p className="position text-[1vw] max-[599px]:text-[3vw] font-light">Student</p>
                    </div>
                </div>
                <div className="review pt-2">
                <p className='text-[1vw] max-[599px]:text-[2.5vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio sapiente culpa. Quibusdam, ullam. Dolor, eveniet odit. Excepturi voluptate suscipit perspiciatis reiciendis ut sint earum nemo facere impedit, asperiores neque!</p>
                </div>
                <div className="stars flex items-center justify-between w-full">
                    <div className="star text-[1vw] max-[599px]:text-[3.5vw]">Stars</div>
                    <div className="date text-[1vw] max-[599px]:text-[3.5vw]">24-12-2024</div>
                </div>
            </div>
            <div className="card w-[35vw] max-[599px]:w-full h-[17vw] max-[599px]:h-full bg-white text-black flex items-start justify-between gap-2 flex-col rounded-xl opacity-40 px-4 py-6">
            <div className="profile flex items-start justify-start gap-2">
                    <div className="image w-[3.5vw] max-[599px]:w-[12vw] h-[3.5vw] max-[599px]:h-[12vw] rounded-full overflow-hidden">
                    <img className='w-full h-full object-cover' src="" alt="" />
                    </div>
                    <div className="txts">
                        <h1 className="name text-[1.5vw] max-[599px]:text-[5vw] font-semibold leading-tight">John Doe</h1>
                        <p className="position text-[1vw] max-[599px]:text-[3vw] font-light">Student</p>
                    </div>
                </div>
                <div className="review pt-2">
                <p className='text-[1vw] max-[599px]:text-[2.5vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio sapiente culpa. Quibusdam, ullam. Dolor, eveniet odit. Excepturi voluptate suscipit perspiciatis reiciendis ut sint earum nemo facere impedit, asperiores neque!</p>
                </div>
                <div className="stars flex items-center justify-between w-full">
                    <div className="star text-[1vw] max-[599px]:text-[3.5vw]">Stars</div>
                    <div className="date text-[1vw] max-[599px]:text-[3.5vw]">24-12-2024</div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Testimonials