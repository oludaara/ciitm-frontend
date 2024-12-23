import React, {memo, useEffect} from "react";

function Empower() {
  return (
    <div className="flex mt-10 h-[75vh] relative">
      <div className="relative w-1/2 h-full flex justify-center items-center">
        <div className="h-60 w-60 bg-black rounded-full absolute left-[5%] top-0"></div>
        <div className="h-40 w-40 bg-black rounded-full absolute left-[40%] top-[20%]"></div>
        <div className="h-60 w-60 bg-black rounded-full absolute left-[12%] top-[45%]"></div>
      </div>

      <div className="w-1/2 h-full relative">
        <h1 className="text-6xl   font-['Montserrat'] font-bold tracking-wide w-[90%]">
          Empowering Young Minds, Shaping Bright Futures
        </h1>
        <h2 className="text-3xl font-['Montserrat'] font-medium my-5">
          Empowering Young Minds, Shaping Bright Futures
        </h2>

        <p className="text-gray-500 lg:w-[75%] w-full font-['Poppins'] ">
          [Your School Name] has been a cornerstone of quality education for [X]
          years. We believe in nurturing young minds with innovative teaching
          methods, a caring environment, and opportunities for holistic growth.
          Our mission is to inspire students to achieve academic success,
          develop strong character, and contribute positively to society.
          <br />
          <br />a caring environment, and opportunities for holistic growth.
          Our mission is to inspire students to achieve academic success,
          develop strong character, and contribute positively to society.
        </p>

        <button className="absolute bottom-10 left-0 bg-[#333] font-['Poppins'] text-white py-2 px-4 rounded-lg">Read More</button>
      </div>
    </div>
  );
}

export default memo(Empower);
