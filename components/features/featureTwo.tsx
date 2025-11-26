import Image from "next/image";
import React from "react";
import featureImg from "../../public/features/feature-2.png";

const FeatureTwo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-5">
      {/* Left side */}
      <div className="flex-1 relative pl-5">
        <h1 className="text-4xl font-semibold">Customizable Cycle Settings</h1>
        <p className="text-2xl/relaxed mt-8 text">
          Through app settings you can update the time settings of the cycle,
          cycle breack / sort breack and long breack to setup how long they should last
        </p>
      </div>

      {/* Right side image */}
      <div className="flex-1 relative">
        <div className="flex flex-row justify-center items-center">
          <Image
            alt="hero-img"
            src={featureImg}
            style={{ objectFit: "cover" }}
            className="w-sm h-sm"
          />
        </div>
        <div className="absolute top-0 right-0 w-xl h-xl blob-4 bg-red-600/80 animate-float -z-1"></div>
        <div className="absolute top-0 right-0 w-2xl h-2xl blob-4 bg-red-600/20 animate-float -z-1"></div>
      </div>
    </div>
  );
};

export default FeatureTwo;
