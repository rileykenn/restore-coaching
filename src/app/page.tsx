import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomeRestoreMethod from "@/components/HomeRestoreMethod";
import HomeRestoreShift from "@/components/HomeRestoreShift";
import HomeCTA from "@/components/HomeCTA";
import HomeTestimonials from "@/components/HomeTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServicesPreview />
      <HomeRestoreMethod />
      <HomeRestoreShift />
      <HomeCTA />
      <HomeTestimonials />
    </>
  );
}
