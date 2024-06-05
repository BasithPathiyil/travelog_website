import React from "react";
import GiftIcon from "./svgIcons/GiftIcon";
import PlayCicleIcon from "./svgIcons/PlayCicleIcon";

const MainContent = () => {
  return (
    <main className=" mx-1 md:mx-8 lg:mx-16 p-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:order-2 lg:w-3/5">
          <img
            src="images/contentImg.png"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>
        {/* Text and Buttons */}
        <div className="text-center lg:text-left lg:w-2/5 lg:order-1">
          <button className="flex px-8 py-4 rounded-[100px] text-[#F85E9F] gap-4 ">
            Explore the world! <GiftIcon />
          </button>
          <h1 className="text-[40px] md:text-[56px] lg:text-[79px] font-bold mb-4">
            <span className="text-black">Travel</span>{" "}
            <span className="text-[#F85E9F]">top destination</span>{" "}
            <span className="text-black">of the world</span>
          </h1>
          <p className="mb-4 text-black/50">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-normal">
            <button className="custom-button-color">Get Started</button>
            <button className="custom-button-border flex gap-4">
              <PlayCicleIcon /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
