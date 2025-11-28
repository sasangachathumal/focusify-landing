import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bg from "../../public/Backgrounds/bg-5.svg";
import appStoreImg from "../../public/app-store-logo.png";
import fbImg from "../../public/facebook.svg";
import gitHImg from "../../public/github.svg";
import fullIconLogoImg from "../../public/icon-logo-full.svg";
import linkImg from "../../public/linkedin.svg";
import playStoreImg from "../../public/play-store-logo.png";

const Footer = () => {
  return (
    <section
      className="w-full h-fit flex flex-col items-center justify-center pt-10 relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
      id="contact"
    >
      <div className="flex-1 flex flex-col justify-center items-center w-full p-20 mt-24">
        <h1 className="text-3xl font-bold text-white">
          What are you waiting for? Download now
        </h1>
        <div className="flex flex-row gap-4 mt-10">
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
        <div className="flex flex-row mt-5">
          <div className="flex-1">
            <Image alt="icon logo" src={fullIconLogoImg} />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="flex justify-start items-center">
              <Button className="bg-transparent hover:bg-transparent p-1 w-fit h-fit rounded-xl">
                <Image alt="icon logo" src={fbImg} className="w-12 h-12" />
              </Button>
              <Button
                className="bg-transparent hover:bg-transparent p-1 w-fit h-fit rounded-xl"
                size="icon"
              >
                <Image alt="icon logo" src={linkImg} className="w-12 h-12" />
              </Button>
              <Button
                className="bg-transparent hover:bg-transparent p-1 w-fit h-fit rounded-xl"
                size="icon"
              >
                <Image alt="icon logo" src={gitHImg} className="w-12 h-12" />
              </Button>
            </div>
            <p className="text-white">devbysasanga@gmail.com</p>
            <p className="text-white">© Dev by Sasanga 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
