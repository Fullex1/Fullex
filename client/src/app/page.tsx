import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/hero/page";
import Services from "./components/services/page";
import WhyFullex from "./components/why-fullex/page";
import HowWeWork from "./components/how-we-work/page";
import Portfoilo from "./components/portfolio/page";
import Rates from "./components/rates/page";
import Plans from "./components/plans/page";
import Faq from "./components/faq/page";
import Footer from "./components/footer/page";

export default function Home() {
  
  return (
    <div className="flex justify-center min-h-screen flex-col">
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-fullex">
        <WhyFullex />
      </section>
      <section id="how-we-work">
        <HowWeWork />
      </section>
      <section id="portfolio">
        <Portfoilo />
      </section>
      <section id="rates">
        <Rates />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <Faq />
      <Footer />

    </div>
  );
}
