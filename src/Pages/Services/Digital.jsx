
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../Components/SubHero";
import CTA from "../../Components/CTA";
import Hero from './../../Components/Hero'
import HomeSubHero from '../../assets/Services/digi.png';
import WhatWeOffer from "../../Components/WhatWeOffer";
import HowWeWork from "../../Components/HowWeWork";
import WhyChooseUs from "../../Components/WhyChooseUs";
import KeyFeature from "../../Components/KeyFeature";
import Testimonials from "../../Components/Testimonials";

const Digital = ({ onNavigate = () => {} }) => {
  return (
    <>
      <SubHero
        title="Digital Marketing Services"
        breadcrumb="Home / Services / Digital"
      />
      <Hero
      image={HomeSubHero}
      tag="Digital Marketing Services"
      title="Grow Your Business With Result-Driven Digital Marketing"
      description="At CSM Techcorp Pvt. Ltd., we help businesses build a strong online presence, reach the right audience, generate quality leads, and grow faster through strategic digital marketing services.
Our digital marketing solutions are designed to improve brand visibility, increase customer engagement, and create measurable business growth."

      features={[
        "Builds strong online presence",
        "Improves website traffic",
        "Increases brand awareness",
        "Supports sales growth",
        "Improves website traffic",
        "Improves customer engagement",
      ]}
      button1="Grow My Business"
      button1Path="/contact"
      onNavigate={onNavigate}

      />

      <WhatWeOffer />

      <HowWeWork onNavigate={onNavigate} />

      <WhyChooseUs />

      <KeyFeature />

      <Testimonials />

      <CTA onNavigate={onNavigate} />
    </>
  );
};

export default Digital;
