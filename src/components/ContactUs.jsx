import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full flex h-fit bg-[#D7D7D726] py-[10%] max-[550px]:pt-[20%] px-[6vw] justify-between max-[800px]:flex-col '>
        <div className='w-[40%] max-[800px]:w-full p-2 '>
            <h1 className='text-[3rem] font-semibold'>About Us</h1>
            <p>Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. Our mission is to shape tomorrow’s leaders by offering exceptional educational opportunities and encouraging intellectual exploration.  
            </p>


            <h2 className='font-semibold text-[1.2rem] mt-[.8rem] mb-[.5rem]'>Location</h2>
            <p>Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. O</p>

            <h2 className='font-semibold text-[1.2rem] mt-[.8rem] mb-[.5rem]'>Our Principle</h2>
            <p>Muhammad Muneeb and vice Principle Sammer Khan</p>

            <h2 className='font-semibold text-[1.2rem] mt-[.8rem] mb-[.5rem]'>Phone Number</h2>
            <p>+92 315 4488695</p>


            <h2 className='font-semibold text-[1.2rem] mt-[.8rem] mb-[.5rem]'>Social Media Accounts</h2>
            <div className='flex'>
                insta, facebook
            </div>
        </div>


        <div className='bg-white rounded-xl w-[40%] max-[800px]:w-full h-fit p-10'>
            <h1 className='text-[1.2rem] font-semibold'>Feel free to ask any query</h1>
            <p className='text-sm w-[89%] mt-1 mb-[1vw]'> Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. </p>
            <form >
                <input type="text" className='border-b p-1 w-full border-black outline-none' placeholder='Name:' />
                <input type="email" className='border-b p-1 w-full border-black my-10 outline-none' placeholder='Email:' />
                <input type="text" className='border-b p-1 w-full border-black outline-none' placeholder='Phone Number:' />


                <textarea className='p-4 bg-[#F9F9F9] outline-none w-full h-[7rem] rounded-lg my-[2vw] border border-[#D7D7D7]'  placeholder='Message:' name="" id=""></textarea>

                <button className='text-center bg-[#333333] w-full text-white py-3 text-xl rounded-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs