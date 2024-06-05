import React from "react";

const TravelPointCard = ({ value, title }) => {
  return (
    <div className="max-w-sm w-full  mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h4 className="text-2xl text-[#FF5722] font-semibold mb-2 text-center">
          {value}
        </h4>

        <p className="text-black-500 text-center">{title}</p>
      </div>
    </div>
  );
};

export default TravelPointCard;
