/* eslint-disable no-unused-vars */
import React from 'react'
import HomeHero from '../Components/HomeHero'
import Hero from '../Components/Hero'
import HomeSubHero from '../assets/HomeSubHero.png';
import AllServices from '../Components/AllServices';
import HowWeWork from '../Components/HowWeWork';
import Testimonials from '../Components/Testimonials';
import CTA from '../Components/CTA';
import BlogSection from '../Components/BlogSection';

const HomePage = ({ onNavigate = () => {} }) => {
  return (
    <>
      <HomeHero onNavigate={onNavigate} />
      <Hero
      image={HomeSubHero}
      tag="Who We Are"
      title="Your Technology Partner for Sustainable Growth"
      description="We believe technology should simplify business not complicate it. CSM Techcorp delivers scalable digital solutions designed to improve efficiency, strengthen online presence, and support long-term growth."

      description1="With a client-first approach and a commitment to innovation, we create solutions that are practical, future-ready, and results-driven."

      features={[
        "Best Value Solutions",
        "Trusted IT Partner",
        "Driving IT Excellence",
        "Digital Transformation",
        "Digital Innovation",
        "Cutting-Edge IT",
      ]}

      button1="Discover More"
      button1Path="/about"
      onNavigate={onNavigate}

    />
    <AllServices onNavigate={onNavigate} />


    <HowWeWork onNavigate={onNavigate} />

    <Testimonials />

    <CTA onNavigate={onNavigate} />

    <BlogSection onNavigate={onNavigate} />
    </>
  )
}

export default HomePage
