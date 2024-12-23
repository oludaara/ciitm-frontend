import React from 'react'

function Skills() {
    const skill = [
        {
          "title": "Innovation",
          "description": "Driving Progress Through Creative Thinking"
        },
        {
          "title": "Integrity",
          "description": "Building a Foundation of Trust and Ethics"
        },
        {
          "title": "Excellence",
          "description": "Setting the Benchmark for Quality Education"
        },
        {
          "title": "Diversity",
          "description": "Celebrating Cultures, Ideas, and Perspectives"
        },
        {
          "title": "Collaboration",
          "description": "Celebrating Cultures, Ideas, and Perspectives"
        },
        {
          "title": "Sustainability",
          "description": "Shaping a Greener Tomorrow"
        }
      ]
      
  return (
    <div className='mt-10 flex w-full h-fit flex-wrap bg-[#333] py-8 px-5 gap-12 items-center justify-center'>
        {
            skill.map(item =>{
                return ( 
                    <div className='w-52 h-52 rounded-lg flex flex-col justify-center py-4 px-3 bg-white'>
                        <div className='image h-16 w-16 rounded-full bg-black'></div>
                        <h1 className='my-2 text-2xl font-["Montserrat"]'>{item.title}</h1>
                        <h2 className='text-gray-500 font-["Poppins"]'>{item.description}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Skills