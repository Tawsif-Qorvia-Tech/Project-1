import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import OurProducts from "@/components/home/OurProducts";
import Specialist from "@/components/home/Specialist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="w-full px-6">
        <Banner />
      </div>
      <div className="w-11/12 mx-auto">
        <About></About>
      </div>

      <div className="w-11/12 mx-auto">
        <Specialist></Specialist>
      </div>

      <div className="w-full px-6">
        <OurProducts></OurProducts>
      </div>
    </div>
  );
}
