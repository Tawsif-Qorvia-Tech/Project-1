import React from "react";
import AboutUs from "@/components/AboutUs/AboutUs";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import Journey from "@/components/AboutUs/Journey";
import Trust from "@/components/AboutUs/Trust";
import Work from "@/components/AboutUs/Work";
import TopSeller from "@/components/OurProduct/TopSeller";
import { getProducts } from "@/actions/server/Product";
import ImpactMetrics from "@/components/ContactUs/ImpactMetrics"
import CTA from "@/components/home/CTA";

const page = async() => {
  const products = await getProducts();
  return (
    <>
      <div className="w-full px-2 xl:px-6">
        <AboutUs></AboutUs>
      </div>
      <div className="w-full">
        <WhoWeAre></WhoWeAre>
      </div>
      <div>
        <Journey></Journey>
      </div>
      <div className="my-15">
        <Trust></Trust>
      </div>
      <div className="w-full">
        <ImpactMetrics></ImpactMetrics>
        </div>
      <div className="w-11/12 mx-auto my-10">
        <TopSeller products={products}></TopSeller>
      </div>
      <div>
        <Work></Work>
      </div>
      <div>
        <CTA></CTA>
      </div>
    </>
  );
};

export default page;
