import React from "react";
import FeatureCard from "./FeatureCard";

let datas = [
  {
    cardImg: "images/Group 9239location.png",
    title: "We offer best services",
    desc: "Lorem ipsum is not simply random text",
  },
  {
    cardImg: "images/Group 9239events.png",
    title: "We offer best services",
    desc: "Lorem ipsum is not simply random text",
  },
  {
    cardImg: "images/Group 9239offer.png",
    title: "We offer best services",
    desc: "Lorem ipsum is not simply random text",
  },
];

const Features = () => {
  return (
    <div className=" py-8 pl-4 ml-0 md:ml-8 lg:ml-16  m-y12 flex flex-col lg:flex-row  items-center">
      <div className="text-center lg:text-left lg:order-2 lg:w-3/5">
        <img
          src="images/paradise.png"
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col lg:order-1 mr-4 md:mr-8 mb-4 lg:mb-0  lg:w-2/5 gap-4 text-center lg:text-left">
        <h1 className="text-[24px]  font-bold mb-4">
          <span className="text-[#F85E9F]">KEY FEATURES</span>{" "}
        </h1>
        <h1 className="subheading  font-bold mb-4">
          <span className="text-[#000000]">We offer best services</span>{" "}
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1  gap-4">
          {datas?.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
