
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../Components/SubHero";
import CTA from "../../Components/CTA";
import Hero from './../../Components/Hero'
import HomeSubHero from '../../assets/Services/erp.png';
import WhatWeOffer from "../../Components/WhatWeOffer";
import HowWeWork from "../../Components/HowWeWork";
import WhyChooseUs from "../../Components/WhyChooseUs";
import KeyFeature from "../../Components/KeyFeature";
import Testimonials from "../../Components/Testimonials";

const Erp = ({ onNavigate = () => {} }) => {
  return (
    <>
      <SubHero
        title="ERP Development"
        breadcrumb="Home / Services / ERP"
      />
      <Hero
      image={HomeSubHero}
      tag="ERP Solutions"
      title="Simplify Business Operations With Smart ERP Solutions"
      description="At CSM Techcorp Pvt. Ltd., we provide ERP services that help businesses manage daily operations, improve workflow, reduce manual work, and make better decisions through organized data.
Our ERP solutions are designed to bring different business processes into one easy-to-manage system, helping your team work faster, smarter, and more efficiently."

      features={[
        "Simplifies business operations",
        "Organizes business data",
        "Reduces manual work",
        "Helps in better decision-making",
        "Improves team productivity",
        "Improves team productivity",
      ]}
      button1="Talk to Expert"
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

export default Erp;
