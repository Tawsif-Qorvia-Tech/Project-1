import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
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
    </div>
  );
}
