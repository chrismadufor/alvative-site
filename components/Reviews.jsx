import React from "react";
import ReviewItem from "./common/ReviewItem";
import ReviewSlider from "./common/ReviewSlider";

function Reviews() {
  return (
    <div className="p-side">
      <div className="pt-1">
        <p className="text-center md:text-lg">What Our Clients Say</p>
        <h1 className="font-semibold text-center heading-bg text-2xl md:text-4xl max-w-4xl mx-auto tracking-wide my-3 md:my-5">
          Why Companies Trust Alvative
        </h1>
        <p className="text-center max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod
          mrore
        </p>
      <ReviewSlider />
      </div>
    </div>
  );
}

export default Reviews;
