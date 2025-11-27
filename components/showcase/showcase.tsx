import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon } from "lucide-react";
import React from "react";

const Showcase = () => {
  return (
    <section className="w-full flex flex-col items-center mt-24 mb-10 relative">
      <div className="flex-1 space-y-6 flex flex-col justify-center items-center w-full py-8">
        <h1 className="text-5xl font-bold">
          <span className="text-red-600">Focusify</span> ShowCase
        </h1>
        <div className="h-5 w-5 rounded-full bg-red-600/40"></div>
      </div>
      <div className="mt-6 w-full flex flex-row justify-center items-center">
        <Card className="w-1/2 h-96">
          <CardContent className="w-full h-full flex flex-row justify-center items-center">
            <Button className="bg-red-600 text-white" size="icon">
              <PlayIcon/>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Showcase;
