import Hero from "@/components/Hero";
import About from "@/components/About";
import BirthDebrief from "@/components/BirthDebrief";
import RestoreMethod from "@/components/RestoreMethod";
import BeforeAfter from "@/components/BeforeAfter";
import ProgramWeeks from "@/components/ProgramWeeks";
import ParentingPathway from "@/components/ParentingPathway";
import ServicesOffered from "@/components/ServicesOffered";
import LifeCoaching from "@/components/LifeCoaching";
import EQCoaching from "@/components/EQCoaching";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <BirthDebrief />
      <RestoreMethod />
      <BeforeAfter />
      <ProgramWeeks />
      <ParentingPathway />
      <ServicesOffered />
      <LifeCoaching />
      <EQCoaching />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
