/* eslint-disable no-unused-vars */
import React from "react";
import HomeSubHero from '../assets/HomeSubHero.png';
import HowWeWork from '../Components/HowWeWork';

import BannerImage from "../assets/page-banner 1.png";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import CTA from "../Components/CTA";

const AboutPage = ({
  title = "About CSM Techcorp",
  breadcrumb = "Home / About",
  image = BannerImage,
  onNavigate = () => {},
}) => {
  return (
    <>
    <section
      className="
      relative
      overflow-hidden
      min-h-[360px]
      sm:min-h-[420px]
      flex
      items-center
      "
    >
      {/* Background */}

      <img
        src={image}
        alt={title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#000C3F]/35" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8">

        <div className="mt-24 sm:mt-32">

          <h1
            className="
            text-white
            text-[32px]
            md:text-[56px]
            font-bold
            "
          >
            {title}
          </h1>

          <p
            className="
            mt-5
            text-white/90
            text-lg
            "
          >
            [{breadcrumb}]
          </p>

        </div>

      </div>
    </section>
    <Hero
      image={HomeSubHero}
      tag="Who We Are"
      title="Your Technology Partner for Sustainable Growth"
      description="At CSM Techcorp Pvt. Ltd., we help businesses grow, transform, and succeed in the digital world through reliable technology and result-driven strategies.
We specialize in Mobile Application Development, Website Design & Development, ERP Services, and Digital Marketing Services, offering complete digital solutions under one roof. Our goal is to simplify technology for businesses and create solutions that improve performance, increase visibility, and support long-term growth.
Whether you are a startup, a growing business, or an established organization, we work closely with you to understand your needs and deliver solutions that truly make a difference."


      features={[
        "Best Value Solutions",
        "Trusted IT Partner",
        "Driving IT Excellence",
        "Digital Transformation",
        "Digital Innovation",
        "Cutting-Edge IT",
      ]}

      button1="Discover More"
      button1Path="/services"
      onNavigate={onNavigate}

    />
    <WhyChooseUs />

    <HowWeWork onNavigate={onNavigate} />

    <Testimonials />

    <CTA onNavigate={onNavigate} />
    </>
  );
};

export default AboutPage;
