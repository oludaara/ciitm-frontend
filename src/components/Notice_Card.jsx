import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import { IoClose } from 'react-icons/io5'



const Notice_Card = ({ title, link }) => {

const box_ref = useRef();

useGSAP(()=>{

    gsap.to('.notice-card', {
        y: -45,
        opacity: 1,
        duration: 1,
        scrub: 5,

      })
})
  
  let Handle_Clone_Btn = () => {
 console.log(box_ref)

 gsap.to(box_ref.current,{
    opacity:0,
    duration:0.5,
    display: 'none',
 })
  }

  return (
    <div ref={box_ref} className='notice-card w-1/2 lg:w-[37vw] 2xl:w-[25vw] h-[5vh] lg:h-[5vh] text-black bg-white rounded-md px-2 py-1 lg:px-3 lg:py-[1vh] flex items-start justify-between opacity-0'>
        
      <h3 className='w-1/2 text-[1.5vh]'>{title}</h3>
      <button className='bg-[#FF0000] px-[1.05vw] rounded text-white h-full text-[1.5vh]'>
        Explore Now
      </button>
      <IoClose fontWeight={900} size={20} onClick={Handle_Clone_Btn} />
    </div>
  )
}

export default Notice_Card
