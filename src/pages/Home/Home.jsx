import React from "react";

import { HeroSection, Banner, OurServices, Guarantee, OurProjects, StepSection, HireService, Contact } from "../../components";

export function Home () {
  
  return (
    <>
      <HeroSection />
      <Banner />
      <HireService />
      <StepSection />
      <OurServices />
      <Guarantee />
      <OurProjects />
      <Contact />
    </>
  );
};