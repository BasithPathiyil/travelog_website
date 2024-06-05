import React from "react";

const FeatureCard = ({ cardImg, title, desc }) => {
  return (
    <div className="w-full  mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 gap-4">
      <div className="p-4 flex flex-col md:flex-row gap-4">
        <div className="flex justify-center mb-8 md:mb-0">
          <img
            className="w-auto h-full object-cover"
            src={cardImg}
            alt={title}
          />
        </div>
        <div>
          <h4 className="text-2xl text-[#000000] font-semibold mb-2">
            {title}
          </h4>

          <p className="text-black-500 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
