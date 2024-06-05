import React from "react";
import TravelPointCard from "./TravelPointCard";

let datas = [
  { value: "500+", title: "Holiday Package" },
  { value: "100", title: "Luxury Hotel" },
  { value: "7", title: "Premium Airlines" },
  { value: "2K+", title: "Happy Customer" },
];

const TravelPoint = () => {
  return (
    <div className=" py-8 pr-4 mr-1 md:mr-8 lg:mr-16 m-y12 flex flex-col lg:flex-row  items-center">
      <div className="text-center lg:text-left lg:w-3/5">
        <img
          src="images/discounted.png"
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col pl-4 ml-0 md:ml-8 mb-4 lg:mb-0  lg:w-2/5 gap-4 text-center lg:text-left">
        <h1 className="text-[24px]  font-bold mb-4">
          <span className="text-[#F85E9F]">TRAVEL POINT</span>{" "}
        </h1>
        <h1 className="subheading  font-bold mb-4">
          <span className="text-[#000000]">
            We helping you find your dream location
          </span>{" "}
        </h1>
        <p className="mb-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 gap-4 relative">
          <img
            src="images/roundedstar.png"
            alt="image"
            className="hidden lg:block absolute top-[-75px] right-[-40px] h-48"
          />
          {datas?.map((item, index) => (
            <TravelPointCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
