
/* eslint-disable no-unused-vars */
import React from "react";
import AboutPage from "../AboutPage";
import AllServices from "../../Components/AllServices";
import CTA from "../../Components/CTA";
import SubHero from "../../Components/SubHero";
import HowWeWork from "../../Components/HowWeWork";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Testimonials from "../../Components/Testimonials";

const Services = ({ onNavigate = () => {} }) => {
  return (
    <>
      <SubHero />
      <AllServices onNavigate={onNavigate} />
      <HowWeWork onNavigate={onNavigate} />
      <WhyChooseUs />
      <Testimonials />
      <CTA onNavigate={onNavigate} />
    </>
  );
};

export default Services;
