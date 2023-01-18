import React from "react";
import { partners } from "../data/partners";

function Partners() {
  return (
    <div className="light-bg py-10 md:py-20">
      <div className="p-side">
        <h1 className="text-center text-2xl md:text-4xl mb-8 md:mb-14 font-semibold heading-bg">Proudly trusted by</h1>
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-10 items-center justify-center max-w-5xl mx-auto">
          {partners.map((item, index) => (<img key={index} className="justify-self-center partner-img" src={item.url} alt={item.name} />))}
          
        </div>
      </div>
    </div>
  );
}

export default Partners;
