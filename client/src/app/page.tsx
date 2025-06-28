import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <div className="flex justify-center h-screen flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
