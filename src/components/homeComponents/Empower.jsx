import React, {memo, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import arrow from '../../assets/images/arrow.png'

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
    <div className="flex my-10 max-[599px]:my-0 relative">

      <img src={arrow} alt="arrow image" className="arrow-image absolute top-1/2 left-[39vw] -translate-x-1/2 -translate-y-1/2 h-[13vw]" />

      <div className="empower-img-div relative w-1/2 h-full flex justify-center items-center">
        <div className="h-[15vw] w-[15vw] bg-black rounded-full absolute left-[5vw] top-[3vw]">
          <img src={Image1} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="h-[10vh]  md:h-[12vw] w-[12vw] rounded-full absolute left-[21vw] top-[20vh]">
        <img src={Image2} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="h-[15vw] w-[15vw]  rounded-full absolute left-[8vw] top-[40vh]">
        <img src={Image3} alt="Image1" className="h-full w-full object-cover rounded-full" />
        </div>
      </div>

      <div className="empower-text md:w-1/2 relative">
        <h1 className="heading text-[3.2vw] max-[599px]:text-[9vw] max-[599px]:w-[90%] font-['Montserrat'] font-bold max-[599px]:font-extrabold leading-tight w-[43vw]  text-[#333333]">
          {Heading_First}
        </h1>
        <h2 className="heading2 text-[1.6vw] max-[599px]:text-[5vw] font-['Montserrat'] font-medium max-[599px]:font-bold my-2 max-[599px]:my-2 max-[599px]:leading-tight w-[37vw] max-[599px]:w-full text-[#333333]">
          {Heading_Second}
        </h2>

        <p className="text-[0.9vw] max-[599px]:mt-4 max-[599px]:text-[3vw] mt-4 font-medium w-[35vw] max-[599px]:w-full text-[#333333] font-['Poppins'] ">
          {Paragraph_First}
          <br />
          <br />
          {Paragraph_Second}
        </p>

        <button className="my-[2vh] bg-[#333] font-['Poppins'] text-white py-2 px-4 rounded-lg">Read More</button>
      </div>
    </div>
  );
}

export default memo(Empower);