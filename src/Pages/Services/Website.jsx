
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../Components/SubHero";
import CTA from "../../Components/CTA";
import Hero from './../../Components/Hero'
import HomeSubHero from '../../assets/Services/web.png';
import WhatWeOffer from "../../Components/WhatWeOffer";
import HowWeWork from "../../Components/HowWeWork";
import WhyChooseUs from "../../Components/WhyChooseUs";
import KeyFeature from "../../Components/KeyFeature";
import Testimonials from "../../Components/Testimonials";

const Website = ({ onNavigate = () => {} }) => {
  return (
    <>
      <SubHero
        title="Website Development"
        breadcrumb="Home / Services / Website"
      />
      <Hero
      image={HomeSubHero}
      tag="Website Development"
      title="Build a Website That Represents Your Business Professionally"
      description="At CSM Techcorp Pvt. Ltd., we design and develop modern, responsive, and performance-focused websites that help businesses build a strong digital presence and attract the right customers. Your website is often the first place where people interact with your brand. We create websites that look professional, load fast, work smoothly on all devices, and help convert visitors into customers."

      features={[
        "Builds trust and brand credibility",
        "Improves customer communication",
        "Creates a strong online presence",
        "Works as a 24/7 business platform",
        "Helps generate leads and inquiries",
        "Helps your business grow online",
      ]}
      button1="Start Your Website"
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

export default Website;
