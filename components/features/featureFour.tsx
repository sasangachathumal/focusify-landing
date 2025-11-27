import Image from "next/image";
import React from "react";
import featureImg from "../../public/features/feature-4.png";

const FeatureFour = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-5">
      {/* Left side */}
      <div className="flex-1 relative pl-5">
        <h1 className="text-4xl font-semibold">Cycle History Logs</h1>
        <p className="text-2xl/relaxed mt-8 text">
          Stats allow you to view your cycle history of each day, providing the
          information about cycle count, break time you took on each day.
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
        <div className="absolute top-0 right-0 w-xl h-xl blob-6 bg-red-600/80 animate-float -z-1"></div>
        <div className="absolute top-0 right-0 w-2xl h-2xl blob-6 bg-red-600/20 animate-float -z-1"></div>
      </div>
    </div>
  );
};

export default FeatureFour;
