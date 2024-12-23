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
    <div ref={box_ref} className='notice-card w-[60%] h-fit text-black bg-white rounded-md px-3 py-2 flex items-center justify-between opacity-0'>
        
      <h3 className='w-2/3'>{title}</h3>
      <button className='bg-[#FF0000] px-2 py-1 rounded text-white h-fit'>
        Explore Now
      </button>
      <IoClose fontWeight={900} size={20} onClick={Handle_Clone_Btn} />
    </div>
  )
}

export default Notice_Card
