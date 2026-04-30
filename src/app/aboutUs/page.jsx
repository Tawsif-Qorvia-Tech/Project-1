import React from "react";
import AboutUs from "@/components/AboutUs/AboutUs";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import Journey from "@/components/AboutUs/Journey";
import Trust from "@/components/AboutUs/Trust";

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
    </>
  );
};

export default page;
