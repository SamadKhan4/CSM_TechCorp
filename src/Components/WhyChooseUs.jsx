/* eslint-disable no-unused-vars */
import React from "react";

import WhyChooseImage from "../assets/WhyChooseUs.png";

const defaultFeatures = [
  {
    title: "1. Client-Focused Approach",
    desc: "We take time to understand your business, challenges, and goals before creating the right solution.",
    icon: "🧭",
  },

  {
    title: "2. Complete Digital Support",
    desc: "From mobile apps and websites to ERP and digital marketing, we provide complete support for your digital growth.",
    icon: "🖥️",
  },

  {
    title: "3. Practical & Scalable Solutions",
    desc: "Our solutions are designed to solve real business problems and grow smoothly with your business.",
    icon: "💡",
  },

  {
    title: "4. Quality-Driven Work",
    desc: "We focus on clean design, reliable development, smooth performance, timely delivery, and long-term support.",
    icon: "🤝",
  },
];

const WhyChooseUs = ({
  tag = "Why Choose Us",

  title = "10+ Years of Delivering Custom IT Solutions Services",

  description = "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.",

  image = WhyChooseImage,

  features = defaultFeatures,
}) => {
  return (
    <section className="bg-[#F5F6F8] py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}

          <div>

            <span className="text-[#13A5BE]">
              [{tag}]
            </span>

            <h2
              className="
              mt-4
              text-[30px]
              sm:text-[42px]
              leading-tight
              font-bold
              text-[#16284A]
            "
            >
              {title}
            </h2>

            <p
              className="
              mt-8
              text-[#606A7B]
              leading-8
              max-w-[620px]
            "
            >
              {description}
            </p>

            <div className="border-t mt-8 mb-8" />

            <img
              src={image}
              alt={title}
              className="
              w-full
              rounded-[28px]
              object-cover
              h-[260px]
              sm:h-[360px]
              lg:h-[420px]
            "
            />

          </div>

          {/* RIGHT */}

          <div className="grid gap-5">

            {features.map((item, index) => (

              <div
                key={index}
                className="
                bg-white
                border
                rounded-2xl
                p-5
                sm:p-8
                flex
                flex-col
                sm:flex-row
                gap-5
                hover:-translate-y-1
                duration-300
              "
              >

                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-[#EEF4FF]
                  flex
                  items-center
                  justify-center
                  text-[24px]
                "
                >
                  {item.icon}
                </div>

                <div>

                  <h3
                    className="
                    text-[#17233E]
                  text-[22px]
                  sm:text-[28px]
                    font-semibold
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-[#606A7B]
                    leading-7
                  "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
