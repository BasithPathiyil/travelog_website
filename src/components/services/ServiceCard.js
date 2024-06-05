import React from "react";
import RightArrow from "../svgIcons/RightArrow";

const ServiceCard = ({ title, cardImg, content }) => {
  return (
    <div className="max-w-sm lg:min-w-80 mx-auto p-14 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer">
      <div className="flex justify-center mb-8">
        <img
          className="w-auto h-14 object-cover transform transition-transform duration-300 hover:scale-110"
          src={cardImg}
          alt={title}
        />
      </div>
      <h2 className="text-2xl font-semibold mb-6 ">{title}</h2>
      <p className="text-gray-700 ">{content}</p>
    </div>
  );
};

export default ServiceCard;
