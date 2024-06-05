import React from "react";
import ServiceCard from "./ServiceCard";

let datas = [
  {
    title: "Best Tour Guide",
    cardImg: "images/destination 1@2x.png",
    content: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    title: "Easy Booking",
    cardImg: "images/booking 1easy.png",
    content: "Square, was moving across the sand in their direction.",
  },
  {
    title: "Weather Forecast",
    cardImg: "images/cloudy 1weather.png",
    content: "What looked like a small patch of purple grass, above five feet.",
  },
];

const Services = () => {
  return (
    <div className=" ml-1 md:ml-8 lg:ml-16 p-4 py-8 flex flex-col lg:flex-row  items-center">
      <div className="text-center lg:text-left lg:w-2/5">
        <h1 className="text-[24px]  font-bold mb-4">
          <span className="text-[#F85E9F]">Services</span>{" "}
        </h1>
        <h1 className="subheading  font-bold mb-4">
          <span className="text-[#000000]">
            Our top value categories for you
          </span>{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row  mb-4 lg:mb-0  lg:w-3/5 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {datas?.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
