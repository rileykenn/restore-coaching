import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BirthDebrief from "@/components/BirthDebrief";
import RestoreMethod from "@/components/RestoreMethod";
import BeforeAfter from "@/components/BeforeAfter";
import ProgramWeeks from "@/components/ProgramWeeks";
import ParentingPathway from "@/components/ParentingPathway";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BirthDebrief />
        <RestoreMethod />
        <BeforeAfter />
        <ProgramWeeks />
        <ParentingPathway />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
