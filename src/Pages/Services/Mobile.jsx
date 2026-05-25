
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../Components/SubHero";
import CTA from "../../Components/CTA";
import Hero from './../../Components/Hero'
import HomeSubHero from '../../assets/Services/mobile.png';
import WhatWeOffer from "../../Components/WhatWeOffer";
import HowWeWork from "../../Components/HowWeWork";
import WhyChooseUs from "../../Components/WhyChooseUs";
import KeyFeature from "../../Components/KeyFeature";
import Testimonials from "../../Components/Testimonials";

const Mobile = ({ onNavigate = () => {} }) => {
  return (
    <>
      <SubHero
        title="Mobile App Development"
        breadcrumb="Home / Services / Mobile"
      />
      <Hero
      image={HomeSubHero}
      tag="Mobile Applications  Development"
      title="Build Powerful Mobile Apps That Grow Your Business"
      description="At CSM Techcorp Pvt. Ltd., we develop modern, user-friendly, and scalable mobile applications that help businesses connect with customers, improve engagement, and simplify digital operations.
Whether you need an app for your startup, business, service platform, e-commerce store, or internal operations, we create mobile solutions designed around your goals and user needs.."

      features={[
        "Improve customer engagement",
        "Simplify business operations",
        "Build stronger brand presence",
        "Offer better user experience",
        "Increase sales and inquiries",
        "Stay ahead of competitors",
      ]}

      button1="Discover More"
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

export default Mobile;
