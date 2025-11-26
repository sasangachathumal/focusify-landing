import React from "react";
import FeatureFour from "./featureFour";
import FeatureOne from "./featureOne";
import FeatureThree from "./featureThree";
import FeatureTwo from "./featureTwo";

function Features() {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-5">
      <div className="flex-1 space-y-6 flex flex-row justify-center items-center w-full py-8">
        <h1 className="text-5xl font-bold">Features</h1>
      </div>
      <>
        <FeatureOne />
      </>
      <>
        <FeatureTwo />
      </>
      <>
        <FeatureThree />
      </>
      <>
        <FeatureFour />
      </>
    </section>
  );
}

export default Features;
