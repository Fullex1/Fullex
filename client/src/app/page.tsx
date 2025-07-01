import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/hero/page";
import Services from "./components/services/page";
import WhyFullex from "./components/why-fullex/page";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <WhyFullex />
    </div>
  );
}
