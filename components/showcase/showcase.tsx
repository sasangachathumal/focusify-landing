import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import image1 from "../../public/showcase/1.png";
import image2 from "../../public/showcase/2.png";
import image3 from "../../public/showcase/3.png";
import image4 from "../../public/showcase/4.png";
import image5 from "../../public/showcase/5.png";
import image6 from "../../public/showcase/6.png";
import image7 from "../../public/showcase/7.png";

import bg1 from "../../public/Backgrounds/bg-1.svg";
import bg2 from "../../public/Backgrounds/bg-2.svg";

const Showcase = () => {
  return (
    <section className="w-full flex flex-col items-center mt-24 mb-10 relative">
      <div className="flex-1 space-y-6 flex flex-col justify-center items-center w-full py-8">
        <h1 className="text-5xl font-bold">
          <span className="text-red-600">Focusify</span> ShowCase
        </h1>
        <div className="h-5 w-5 rounded-full bg-red-600/40"></div>
      </div>
      <div className="mt-6 w-full flex flex-row justify-center relative">
        <div className="absolute top-30 right-14 w-[350px] h-[350px] bg-red-400/30 rounded-full blur-3xl -z-2"></div>
        <div className="absolute top-20 left-36 w-[200px] h-[200px] bg-red-400/30 rounded-full blur-3xl -z-2"></div>
        <Card className=" w-full max-w-1/2 h-96">
          <CardContent className="w-full h-full flex flex-row justify-center items-center">
            <Button className="bg-red-600 text-white" size="icon">
              <PlayIcon />
            </Button>
          </CardContent>
        </Card>
      </div>
      <div
        className="mt-20 w-full flex flex-row justify-center bg-cover bg-no-repeat bg-center -px-5"
        style={{ backgroundImage: `url(${bg2.src})` }}
      >
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={1}
            >
              <Image alt="image-1" src={image1} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={2}
            >
              <Image alt="image-2" src={image2} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={3}
            >
              <Image alt="image-3" src={image3} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={4}
            >
              <Image alt="image-4" src={image4} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={5}
            >
              <Image alt="image-5" src={image5} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={6}
            >
              <Image alt="image-6" src={image6} className="w-40" />
            </CarouselItem>
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
              key={7}
            >
              <Image alt="image-7" src={image7} className="w-40" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Showcase;
