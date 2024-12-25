import React, {memo, useEffect, useState} from "react";
import { useSelector } from "react-redux";

function Empower() {
const [Image1, setImage1] = useState('')
const [Image2, setImage2] = useState('')
const [Image3, setImage3] = useState('')
const [Heading_First, setHeading_First] = useState('')
const [Heading_Second, setHeading_Second] = useState('')
const [Paragraph_First, setParagraph_First] = useState('')
const [Paragraph_Second, setParagraph_Second] = useState('')
let about = useSelector(state => state.ui.landingPage)

useEffect(() => {

  if (about) {
    console.log(about)
  let data = about.AboutSection;
  setImage1(data.image_First)
  setImage2(data.image_Second)
  setImage3(data.image_Third)
  setHeading_First(data.Heading_First)
  setHeading_Second(data.Heading_Second)
  setParagraph_First(data.paragraph_First)
  setParagraph_Second(data.paragraph_Second)
  }

}, [about])



  return (
    <div className="flex mt-10 md:h-[109vh] lg:h-[90vh] sm:h-fit relative">
      <div className="empower-img-div relative w-1/2 h-full flex justify-center items-center">
        <div className="sm:h-48 sm:w-48 md:h-72 md:w-72 bg-black rounded-full absolute left-[5%] top-0">
          <img src={Image1} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="md:h-52 md:w-52 sm:h-28 sm:w-28 bg-black rounded-full absolute left-[40%] top-[20%] md:left-[55%] md:top-[25%] lg:left-[40%] lg:top-[22%]">
        <img src={Image2} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="md:h-72 md:w-72 sm:h-48 sm:w-48 bg-black rounded-full absolute left-[12%] top-[45%]">
        <img src={Image3} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
      </div>

      <div className="empower-text md:w-1/2  h-full relative">
        <h1 className="heading md:text-6xl sm:text-2xl   font-['Montserrat'] font-bold tracking-wide w-[90%]">
          {Heading_First}
        </h1>
        <h2 className="heading2 md:text-3xl sm:text-xl font-['Montserrat'] font-medium my-8 w-[90%]">
          {Heading_Second}
        </h2>

        <p className="text-gray-500 sm:w-[75%] sm:text-sm w-full font-['Poppins'] ">
          {Paragraph_First}
          <br />
          <br />
          {Paragraph_Second}
        </p>

        <button className="mt-8 bg-[#333] font-['Poppins'] text-white py-2 px-4 rounded-lg">Read More</button>
      </div>
    </div>
  );
}

export default memo(Empower);
