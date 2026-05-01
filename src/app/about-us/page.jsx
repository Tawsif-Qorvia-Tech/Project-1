import React from "react";
import AboutUs from "@/components/AboutUs/AboutUs";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import Journey from "@/components/AboutUs/Journey";
import Trust from "@/components/AboutUs/Trust";
import Work from "@/components/AboutUs/Work";

const page = () => {
  return (
    <>
      <div className="w-full px-6">
        <AboutUs></AboutUs>
      </div>
      <div className="w-full">
        <WhoWeAre></WhoWeAre>
      </div>
      <div>
        <Journey></Journey>
      </div>
      <div>
        <Trust></Trust>
      </div>
      <div>
        <Work></Work>
      </div>
    </>
  );
};

export default page;
