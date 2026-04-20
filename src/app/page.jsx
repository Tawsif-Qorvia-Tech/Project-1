import LearnMore from "@/components/buttons/LearnMore";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Banner></Banner>
      <About></About>
    </div>
  );
}
