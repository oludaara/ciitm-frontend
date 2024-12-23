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
    <div className="flex mt-10 h-[75vh] relative">
      <div className="relative w-1/2 h-full flex justify-center items-center">
        <div className="h-60 w-60 bg-black rounded-full absolute left-[5%] top-0">
          <img src={Image1} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="h-40 w-40 bg-black rounded-full absolute left-[40%] top-[20%]">
        <img src={Image2} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="h-60 w-60 bg-black rounded-full absolute left-[12%] top-[45%]">
        <img src={Image3} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
      </div>

      <div className="w-1/2 h-full relative">
        <h1 className="text-6xl   font-['Montserrat'] font-bold tracking-wide w-[90%]">
          {Heading_First}
        </h1>
        <h2 className="text-3xl font-['Montserrat'] font-medium my-5">
          {Heading_Second}
        </h2>

        <p className="text-gray-500 lg:w-[75%] w-full font-['Poppins'] ">
          {Paragraph_First}
          <br />
          <br />
          {Paragraph_Second}
        </p>

        <button className="absolute bottom-10 left-0 bg-[#333] font-['Poppins'] text-white py-2 px-4 rounded-lg">Read More</button>
      </div>
    </div>
  );
}

export default memo(Empower);
