/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaAndroid,
  FaApple,
  FaCog,
  FaPencilRuler,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaAndroid />,
    title: "Android",
    desc: "Scalable apps for the world's most popular platform.",
  },

  {
    icon: <FaApple />,
    title: "iOS",
    desc: "Premium native experiences for Apple ecosystems.",
  },

  {
    icon: <FaCog />,
    title: "Custom",
    desc: "Tailored solutions for complex workflows.",
  },

  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    desc: "Human-centric interfaces for high engagement.",
  },

  {
    icon: <FaHeadset />,
    title: "Maintenance",
    desc: "24/7 monitoring and performance updates.",
  },
];

const WhatWeOffer = ({
  title = "What We Offer",
  items = services,
}) => {
  return (
    <section className="bg-[#F6F7F9] py-14 sm:py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2
            className="
            text-[30px]
            sm:text-[44px]
            font-bold
            text-[#17233E]
          "
          >
            {title}
          </h2>

        </div>

        {/* Cards */}

        <div
          className="
          mt-10
          sm:mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-5
        "
        >

          {items.map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-xl
              p-8
              text-center
              shadow-sm
              hover:-translate-y-2
              hover:shadow-lg
              duration-300
            "
            >

              <div
                className="
                flex
                justify-center
                text-[#2159B8]
                text-[28px]
                mb-6
              "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-[#17233E]
                text-[22px]
                font-semibold
              "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-4
                text-[#667085]
                leading-7
              "
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhatWeOffer;
