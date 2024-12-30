import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "person 1",
      position: "Student",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio sapiente culpa. Quibusdam, ullam.",
      date: "24-12-2024",
      image: "",
    },
    {
      id: 1,
      name: "person 2",
      position: "Student",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio sapiente culpa. Quibusdam, ullam.",
      date: "24-12-2024",
      image: "",
    },
    {
      id: 1,
      name: "person 3",
      position: "Student",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio sapiente culpa. Quibusdam, ullam.",
      date: "24-12-2024",
      image: "",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "10%",
    responsive: [
        {
          breakpoint: 600, // Mobile
          settings: {
            slidesToShow: 1,
            centerPadding: "0", // Full-width on mobile
            centerMode:false
          },
        },
      ],
  };

  return (
    <section className="w-full py-10 px-6 text-white bg-[#333] flex max-[600px]:flex-col items-center overflow-hidden">
      <div className="left-txts w-full mb-8">
        <h1 className="text-[4vw] max-[599px]:text-[8vw] font-semibold">
          Transforming Lives, One Story at a Time!
        </h1>
        <p className="text-[1vw] max-[599px]:text-[3.5vw] font-light mt-4 w-[65%] max-[599px]:w-full">
          See why students love learning with us and how we’ve made a
          difference in their journeys.
        </p>
      </div>

      <Slider {...settings} className="slider max-[600px]:w-full w-1/2">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-full flex justify-center"
          >
            <div className="card w-[35vw] max-[599px]:w-full bg-white text-black rounded-xl px-6 py-8 transform transition-all duration-300 hover:scale-105">
              <div className="profile flex items-center gap-4">
                <div className="image w-[3.5vw] max-[599px]:w-[12vw] h-[3.5vw] max-[599px]:h-[12vw] rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="txts">
                  <h1 className="name text-[1.5vw] max-[599px]:text-[5vw] font-semibold">
                    {testimonial.name}
                  </h1>
                  <p className="position text-[1vw] max-[599px]:text-[3vw]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="review mt-4 text-[1vw] max-[599px]:text-[2.5vw]">
                {testimonial.review}
              </p>
              <div className="stars flex justify-between mt-4">
                <span className="text-[1vw] max-[599px]:text-[3.5vw]">
                  ⭐⭐⭐⭐⭐
                </span>
                <span className="date text-[1vw] max-[599px]:text-[3.5vw]">
                  {testimonial.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
