import React from "react";
import TripAdvisor from "./svgIcons/TripAdvisor";
import AirBnb from "./svgIcons/AirBnb";
import Expedia from "./svgIcons/Expedia";
import Booking from "./svgIcons/Booking";
import Rbitz from "./svgIcons/Rbitz";

const Banners = () => {
  return (
    <div className="mx-1 md:mx-8 lg:mx-16  py-16">
      <div className="grid  grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex justify-center items-center">
          <TripAdvisor />
        </div>
        <div className="flex justify-center items-center">
          <Expedia />
        </div>
        <div className="flex justify-center items-center">
          <Booking />
        </div>
        <div className="flex justify-center items-center">
          <AirBnb />
        </div>
        <div className="flex justify-center items-center">
          <Rbitz />
        </div>
      </div>
    </div>
  );
};

export default Banners;
