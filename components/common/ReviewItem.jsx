import React from "react";

function ReviewItem({ message, logo, name, role }) {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="light-bg pt-20 pb-10 lg:py-14 relative">
        <div className="absolute top-0 w-full flex justify-center">
          <img className="" src="/assets/quote.svg" alt="" />
        </div>
        <div className="px-8 mt-4 md:mt-10 review-box">
          <p className="leading-normal">
            {message}
          </p>
        </div>
      </div>
      <div className="bg-gray-800 text-white px-10 flex items-center">
        <div className="py-5">
          <img className="mb-5 lg:mb-14" src={logo} alt="" />
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-400 mt-2">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
