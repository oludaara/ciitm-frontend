import React from 'react'

const ContactUs = () => {
  return (
    <div className='Form_Container flex  bg-[#d7d7d719] my-[2vh] max-[550px]:pt-[20%] px-[3vw] justify-between max-[823px]:flex-col items-center pt-[12vh] pb-[7vh]'>
        <div className='Container_Left w-[38%] max-[823px]:w-[93vw] p-2 text-[#333333] '>
            <h1 className='text-[2.6vw]  max-[823px]:text-[4vw] font-semibold'>About Us</h1>
            <p className='text-[0.9vw] max-[823px]:text-[2vw] font-medium'>Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. Our mission is to shape tomorrow’s leaders by offering exceptional educational opportunities and encouraging intellectual exploration.  
            </p>


            <h2 className='font-semibold text-[1.5vw] max-[823px]:text-[3vw]  mt-[.8rem] mb-[.5rem]'>Location</h2>
            <p className='text-[0.9vw] max-[823px]:text-[2vw] font-medium'>Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. O</p>

            <h2 className='font-semibold text-[1.5vw] max-[823px]:text-[3vw]  mt-[.8rem] mb-[.5rem]'>Our Principle</h2>
            <p className='text-[0.9vw] max-[823px]:text-[2vw] font-medium'>Muhammad Muneeb and vice Principle Sammer Khan</p>

            <h2 className='font-semibold text-[1.5vw] max-[823px]:text-[3vw] mt-[.8rem] mb-[.5rem]'>Phone Number</h2>
            <p className='text-[0.9vw]  max-[823px]:text-[2vw] font-medium'>+92 315 4488695</p>


            <h2 className='font-semibold text-[1.5vw] max-[823px]:text-[3vw] mt-[.8rem] mb-[.5rem]'>Social Media Accounts</h2>
            <div className='flex'>
                insta, facebook
            </div>
        </div>


        <div className='Container_Right bg-white rounded-3xl w-[40vw] max-[1179px]:w-[48vw] max-[822px]:w-[95vw]  h-fit p-[2vw] max-[823px]:p-[3.5vw] text-[#333333] border-[1.1px] border-[#D7D7D7] shadow-lg shadow-gray-300 mt-[7vh]'>
            <h1 className='text-[1.3vw] max-[823px]:text-[3.5vw] font-semibold'>Feel free to ask any query</h1>
            <p className='text-[0.9vw] max-[823px]:text-[2vw]  mt-1 mb-[1vw] font-medium w-[85%]'> Welcome to [Institute Name], an institution dedicated to fostering innovation, knowledge, and personal growth. </p>
            <form className='form flex flex-col gap-[1vh]'>
                <input type="text" className='peer w-full py-1 text-[1vw] max-[830px]:text-[2.5vw] mt-[2vh] border-b focus:outline-none transition ease-linear focus:border-[#333333] border-gray-300 shadow-sm' placeholder='Name:' />
                <input type="email" className='border-b p-1 w-full border-[#A0A0A0] my-10 focus:outline-none text-[1vw] max-[830px]:text-[2.5vw]' placeholder='Email:' />
                <input type="text" className='border-b p-1 text-[1vw] max-[830px]:text-[2.5vw] w-full border-[#A0A0A0] focus:outline-none' placeholder='Phone Number:' />


                <textarea className='p-4 bg-[#F9F9F9] text-[1vw] max-[830px]:text-[2.5vw] outline-none w-full h-[15vh] rounded-lg my-[2vw] border border-[#D7D7D7]'  placeholder='Message:' name="" id=""></textarea>

                <button className='text-center bg-[#333333] w-full text-white py-3 text-[1.2vw] max-[830px]:text-[3vw] rounded-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs