import React from "react";

function Growth() {
  return (
    <div className="p-side growth-bg mt-20">
      <div className="py-10 md:py-24">
        <div className="text-center">
          <h1 className="font-semibold text-center text-2xl md:text-4xl max-w-4xl mx-auto tracking-wide my-5">
            Growth is Tough, Let’s Make it Easier
          </h1>
          <p className="text-center max-w-xl mx-auto text-white">
            From integration support to talent recruitment. We take the brakes
            off to help your company grow, and serve your customers better
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 max-w-6xl mx-auto mt-8 md:mt-14">
          <div className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14">
            <h1 className="font-bold text-xl">Hire or Contract Talents</h1>
            <p className="mt-3 leading-loose">
              A detailed wireframe kit made of comprehensive components to get
              you started on you next website or landing page project.
            </p>
            <p className="heading-bg mt-4">
              Request Talent <i className="fa-solid fa-arrow-right ml-1"></i>
            </p>
          </div>
          <div className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14">
            <h1 className="font-bold text-xl">Outsource Projects</h1>
            <p className="mt-3 leading-loose">
            A detailed wireframe kit made of comprehensive components to get you started on you next website or landing page project. 
            </p>
            <p className="heading-bg mt-4">
              Get started now <i className="fa-solid fa-arrow-right ml-1"></i>
            </p>
          </div>
          <div className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14">
            <h1 className="font-bold text-xl">Talent Partnership</h1>
            <p className="mt-3 leading-loose">
              A detailed wireframe kit made of comprehensive components to get
              you started on you next website or landing page project.
            </p>
            <p className="heading-bg mt-4">
              Contact us <i className="fa-solid fa-arrow-right ml-1"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
