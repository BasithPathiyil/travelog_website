import React from "react";

const DestinationCard = ({ cardImg, title, price, place, rating }) => {
  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-[50px] shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-6">
        <img
          className="w-full h-56 object-cover rounded-t-[50px]"
          src={cardImg}
          alt={title}
        />
      </div>
      <div className="p-8">
        <div className="flex flex-col lg:flex-row justify-between justify-items-center gap-4 lg:gap-20">
          <p className=" mb-2 text-left lg:text-right lg:order-2 text-[#F85E9F] font-bold">
            ${price}
          </p>
          <h2 className="text-[23px] font-semibold mb-2 text-left lg:order-1">
            {title}
          </h2>
        </div>

        <p className="text-gray-500 text-left mb-4">{place}</p>
        <div className="text-yellow-500 text-left mt-2">
          {rating}
          <span>★</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
