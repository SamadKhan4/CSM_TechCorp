/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { FaCloud, FaShieldAlt } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import HomeHeroImage from "../assets/HomeHero.jpg";

const cards = [
  {
    icon: <MdOutlineSettingsSuggest />,
    title: "DevOps & Automation",
    desc:
      "Streamlining infrastructure and deployments for speed, reliability, and scalability.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    desc:
      "Protecting your digital assets with advanced security solutions and monitoring.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc:
      "Building secure, flexible, and scalable cloud environments.",
  },
];

const HomeHero = ({ onNavigate = () => {} }) => {
  return (
    <section className="relative w-full min-h-[680px] overflow-hidden sm:min-h-[760px] lg:min-h-[820px]">

      {/* Background */}
      <img
        src={HomeHeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010B20]/95 via-[#020b20]/70 to-[#020b20]/30" />

      {/* Main */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 pt-32 sm:px-6 md:px-8 md:pt-40">

        {/* Top Content */}
        <div className="max-w-[680px]">

          <span className="text-cyan-400 font-medium tracking-wide">
            [ Smart IT Solutions ]
          </span>

          <h1 className="mt-5 text-white text-[38px] leading-[1.08] font-bold sm:text-[48px] lg:text-[60px]">

            Transforming Ideas

            <br />

            Into{" "}
            <span className="text-cyan-400">
              IT Solutions
            </span>

          </h1>

          <p className="mt-7 text-gray-300 max-w-[560px] leading-7 text-base sm:leading-8 sm:text-lg">

            We provide world-class IT services and digital
            solutions that help businesses innovate,
            grow, and stay ahead in a fast-changing world.

            <br />

            Your vision. Our technology. Real results.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">

            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="
              w-full
              sm:w-auto
              px-6
              sm:px-8
              py-4
              rounded-lg
              text-white
              font-semibold
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
              hover:scale-105
              duration-300
              flex
              items-center
              gap-3
            "
            >
              Get Free Consultation

              <FiArrowRight />

            </button>

            <button
              type="button"
              onClick={() => onNavigate("/services")}
              className="text-white flex items-center justify-center gap-3 sm:justify-start"
            >

              How We Work

              <FiArrowRight />

            </button>

          </div>


        </div>

        {/* Cards */}



      </div>
    </section>
  );
};

export default HomeHero;
