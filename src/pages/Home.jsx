import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import Hero from "../components/home/Hero";
import CompanyIntro from "../components/home/CompanyIntro";
import OurServices from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactPreview from "../components/home/ContactPreview";
import FadeIn from "../components/common/FadeIn";

const Home = () => {
  usePageTitle(
    "Home",
    "Elite Construction delivers quality residential and commercial construction, renovation, and design services."
  );

  return (
    <div>
      {/* Hero is excluded: it's above the fold and already has its own load animation */}
      <Hero />

      <FadeIn>
        <CompanyIntro />
      </FadeIn>

      <FadeIn>
        <OurServices />
      </FadeIn>

      <FadeIn>
        <WhyChooseUs />
      </FadeIn>

      <FadeIn>
        <FeaturedProjects />
      </FadeIn>

      {/* StatsSection already animates its own numbers on scroll (Step 7f) — no FadeIn needed */}
      <StatsSection />

      <FadeIn>
        <TestimonialsSection />
      </FadeIn>

     

      <FadeIn>
        <ContactPreview />
      </FadeIn>
    </div>
  );
};

export default Home;