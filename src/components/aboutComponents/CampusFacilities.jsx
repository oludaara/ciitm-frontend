import React from "react";
import { Link } from "react-router-dom";
// import bulletPoint from "../../assets/images/bulletPoint.png";

const CampusFacilities = () => {
  const campusFacilities = {
    title: "Campus and Facilities",
    description:
      "The University of the institute provides several facilities to staff and students, which include health, hostel, transport, library, sports and various others.",
    hostelDetails: {
      description:
        "The University of the institute provides several facilities to staff and students, which include health, hostel, transport, library, sports and various others.",
      costPerMonth: "4000 INR",
      roomDetails: "1 Room, square shape",
    },
    hostel: {
      name: "Hostels",
      details:
        "There are twenty-eight hostels, including eleven separate hostels for female students. The residential accommodation in each of these hostels comprises cubicles and three-seat dormitories.",
    },
  };
  const facilities = [
    { name: "Transport" },
    { name: "Digital Class" },
    { name: "Video Conference" },
    { name: "Health" },
    { name: "Sports" },
    { name: "Library" },
    { name: "Curricular Activities" },
    { name: "News & Events" },
    { name: "Internet Infrastructure" },
  ];

  return (
    <div className="w-full h-fit bg-[#333] px-10 py-[5vw] flex gap-[5vw]">
      <div className="bg-white gap-[0.32vw] flex flex-col rounded-lg px-4 py-2 h-fit">
        {facilities.map((item) => (
          <Link className="flex gap-2 hover:bg-zinc-400 py-2 transition-all duration-200 ease-linear rounded-md px-1">
            <img src="" alt="" />
            {item.name}
          </Link>
        ))}
      </div>

      <div className=" text-white">
        <div className="w-[50vw] mb-[2.2vw]">
          <h1 className="font-semibold text-[1.7vw] mb-2">{campusFacilities.title}</h1>
          <p>{campusFacilities.description}</p>
        </div>

        <div className="w-[50vw] mb-[2.2vw]">
          <h1 className="text-[1.3vw] mb-2 flex gap-2">
          <img className="w-[1.5vw] h-[1.5vw]" src="" alt="" />
            {campusFacilities.hostel.name}
            </h1>
          <p>{campusFacilities.hostel.details}</p>
        </div>
        <div className="flex w-[70vw] gap-5">
        <div className="img-div h-[161px] w-[161px] rounded-lg bg-white"></div>
          <div className="w-[60%]" >
            
            <h1 className="font-semibold text-[1.7vw]">Description</h1>
            <p>{campusFacilities.hostelDetails.description}</p>

            <div className="flex my-[1vw] items-center gap-5">
                <p >
                <span className="text-[#FF6603] px-1">Per Month:</span>
                {campusFacilities.hostelDetails.costPerMonth}
                </p>
                <p>
                <span className="text-[#FF6603] px-1">Room:</span>
                {campusFacilities.hostelDetails.roomDetails}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;