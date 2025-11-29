import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import appStoreImg from "../../public/app-store-logo.png";
import focusifyHeroImg from "../../public/focusify-hero-img.png";
import playStoreImg from "../../public/play-store-logo.png";

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center py-5 scroll-mt-28" id="hero">
      {/* Background items */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-3xl -z-2"></div>
      <div className="absolute top-60 right-10 w-[350px] h-[350px] bg-red-400/30 rounded-full blur-3xl -z-2"></div>
      <div className="absolute top-0 right-0 w-lg h-lg blob-1 bg-red-600/30 animate-float -z-1"></div>
      <div className="absolute top-1/3 right-1/3 w-md h-md blob-2 bg-blue-900/30 animate-float -z-1"></div>

      {/* Left side */}
      <div className="flex-1 space-y-6">
        <h1 className="text-7xl">Enhance your</h1>
        <h1 className="text-7xl">Productivity with</h1>
        <p className="text-red-600 text-7xl font-bold">Focusify</p>

        <div className="flex gap-4 flex-col justify-start">
          <p className="text-black-400 text-lg">Download now</p>
          <div className="flex flex-row gap-4">
            <Button className="w-fit">
              <Image
                src={playStoreImg}
                alt="app-store-logo"
                className="object-cover w-full h-full"
              />
              Play Store
            </Button>
            <Button className="w-fit">
              <Image
                src={appStoreImg}
                alt="app-store-logo"
                className="object-cover w-full h-full"
              />
              App Store
            </Button>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:block flex-1 px-20">
        <Image
          alt="hero-img"
          src={focusifyHeroImg}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
