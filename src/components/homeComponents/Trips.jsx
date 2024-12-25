import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Trips() {
  const trips = [
    {
      id: 1,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-first-image",
      alt: "Group of smiling kids waving flags outdoors",
    },
    {
      id: 2,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-second-image",
      alt: "Group of friends with a helicopter in the background, smiling",
    },
    {
      id: 3,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-third-image",
      alt: "Hikers trekking through misty mountains",
    },
    {
      id: 4,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-fourth-image",
      alt: "Close-up of players in a muddy sports game",
    },
    {
      id: 5,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-fifth-image",
      alt: "Athletes running on a track in a stadium",
    },
    {
      id: 6,
      title: "Swat Trip",
      date: "10-2-2024",
      image: "url-to-sixth-image",
      alt: "Child wearing an orange backpack in a colorful classroom",
    },
  ];

  return (
    <div className="w-full sm:h-[150vh] md:h-screen px-10 py-5 flex items-center justify-between sm:flex-col md:flex-row">
      <div className="md:w-1/2 md:h-[80%] sm:w-full sm:h-full grid md:grid-cols-3 sm:grid-cols-2 gap-2 place-items-center">
        {trips.map(item=>{
            return (
                <div className="sm:h-[230px] md:h-full w-full rounded-lg overflow-hidden relative">
                    <div className="h-full w-full bg-zinc-500 absolute top-0 left-0">img</div>
                    <div className="flex justify-center p-1.5 items-center rounded-full w-8 h-8 bg-black absolute z-40 right-1 top-1">
                    <GoArrowUpRight className="text-2xl text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-25 flex justify-between h-[25%] items-center px-1  w-full z-50">
                        <p className="sm:text-sm md:text-base">{item.title}</p>
                        <p className="sm:text-sm md:text-base">{item.date}</p>
                    </div>
                </div>
            )
        })}
      </div>

      <div className="h-[80%] md:w-[47%] sm:w-full sm:mt-2 md:mt-0 rounded-lg overflow-hidden relative">
                    <div className="h-full w-full bg-zinc-500 absolute top-0 left-0">img</div>
                    <div className="flex justify-center p-1.5 items-center rounded-full w-8 h-8 bg-black absolute z-40 right-1 top-1">
                    <GoArrowUpRight className="text-2xl text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-25 flex justify-between px-3 py-2  w-full z-50">
                        <p>titile</p>
                        <p>date</p>
                    </div>
        </div>
    </div>
  );
}

export default Trips;
