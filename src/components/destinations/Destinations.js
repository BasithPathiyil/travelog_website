import React from "react";
import LeftArrow from "../svgIcons/LeftArrow";
import RightArrow from "../svgIcons/RightArrow";
import DestinationCard from "./DestinationCard";

let datas = [
  {
    title: "Paradise Beach, Bantayan Island",
    cardImg: "images/Rectangle 6paradise.png",
    price: "2.99",
    place: "Rome, Italy",
    rating: 4.8,
  },
  {
    title: "Ocean with full of Colors",
    cardImg: "images/Rectangle 6ocean.png",
    price: "2.99",
    place: "Maldives",
    rating: 4.5,
  },
  {
    title: "Mountain View, Above the Cloud",
    cardImg: "images/Rectangle 6mountain.png",
    price: "2.99",
    place: "United Arab Emirates",
    rating: 5.0,
  },
];

const Destinations = () => {
  return (
    <div className=" mx-1 md:mx-8 lg:mx-16 p-4 py-16">
      <div className="px-4 flex flex-col lg:flex-row mb-4 items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-[24px]  font-bold mb-4">
            <span className="text-[#F85E9F]">Top Destination</span>{" "}
          </h1>
          <h1 className="subheading  font-bold mb-4">
            <span className="text-[#000000]">Explore top destination</span>{" "}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex w-full justify-between md:justify-center lg:justify-end">
            <button className="arrow-button">
              <LeftArrow />
            </button>
            <button className="arrow-button-color">
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-4">
        {datas.map((item, index) => (
          <DestinationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
