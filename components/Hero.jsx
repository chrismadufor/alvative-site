import React from "react";
import Button from "./common/Button";

function Hero() {
  return (
    <div className="p-side mt-24 md:mt-32 xl:mt-20 mb-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold leading-normal md:leading-normal heading-bg tracking-wide">Get Smart Technical Talents to <div className="text-center inline relative">Accelerate <img className="fancy-line" src="/assets/line.svg" alt="" /></div> your Growth</h1>
        </div>
        <div className="mt-5 md:mt-10 xl:mt-0 xl:max-w-sm xl:justify-self-center">
          <p className="md:leading-10 md:text-lg">
            We provide vetted technical talents to support your business with
            Technical Support, API Integrations, Project Development,
            Documentation, Testing and so much more!
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Button title={"Get Started"} color={true} />
            <Button title={"Hire Talents"} color={false} />
          </div>
        </div>
      </div>
      <div className="mt-14">
        <img className="w-full hero-img object-cover" src="/assets/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
