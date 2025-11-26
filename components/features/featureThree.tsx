import Image from "next/image";
import React from "react";
import featureImg1 from "../../public/features/feature-3-a.png";
import featureImg2 from "../../public/features/feature-3-b.png";

const FeatureThree = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-5">

      {/* Left side */}
      <div className="flex-1 relative">
        <div className="flex flex-row justify-center items-center">
          <Image
            alt="hero-img"
            src={featureImg1}
            style={{ objectFit: "cover" }}
            className="w-sm h-sm -mr-24"
          />
          <Image
            alt="hero-img"
            src={featureImg2}
            style={{ objectFit: "cover" }}
            className="w-sm h-sm"
          />
        </div>
        <div className="absolute top-0 right-0 w-xl h-xl blob-5 bg-red-600/80 animate-float -z-1"></div>
        <div className="absolute top-0 right-0 w-2xl h-2xl blob-5 bg-red-600/20 animate-float -z-1"></div>
      </div>

      {/* Right side image */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold">Visual & Automatic Cycle Count</h1>
        <p className="text-2xl/relaxed mt-8 text">
          Once cycle starts app visualy indicate the complete and on going
          cycles and switching to break and next cycles will happen
          automatically when time reached
        </p>
      </div>
    </div>
  )
}

export default FeatureThree