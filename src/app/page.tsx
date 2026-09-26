import { About } from "@/components/sections/about";
import { Advantages } from "@/components/sections/advantages";
import { Contact } from "@/components/sections/contact";
import { CoreFeatures } from "@/components/sections/core-features";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Platform } from "@/components/sections/platform";
import { Stats } from "@/components/sections/stats";
import { UpgradeCta } from "@/components/sections/upgrade-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <About />
      <Platform />
      <Advantages />
      <Experience />
      <Highlights />
      <Stats />
      <UpgradeCta />
      <Faq />
      <Contact />
    </>
  );
}
