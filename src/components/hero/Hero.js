// Hero.js
import React from "react";

function Hero({ title, subtitle, images }) {
  return (
    <div className="hero flex items-center px-8 py-12 bg-primary max-h-[60vh] xl:pt-24 ">
      {/* Left Section - Header */}
      <div className="w-1/2 pr-8">
        <h1 className=" text-2xl md:text-3xl  lg:text-4xl  font-bold text-gray-800">
          {title}
        </h1>
        <p className="mt-4 text-sm md:text-md lg:text-lg text-gray-600">
          {subtitle}
        </p>
      </div>
      {/* Right Section - Dynamic Image Grid */}
      <div className="w-1/2 flex items-center gap-2 lg:gap-4">
        <div className="flex flex-col gap-2 lg:gap-4 max-w-64">
          <img src={images[0].src} alt="" />
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 max-w-64">
          <img src={images[1].src} alt="" />
          <img src={images[2].src} alt="" />
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 max-w-64">
          <img src={images[3].src} alt="" />
          <img src={images[4].src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
