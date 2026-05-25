/* eslint-disable no-unused-vars */
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Hero = ({
  image,
  tag,
  title,
  description,
  description1,
  features = [],
  button1,
  button2,
  button1Path = "/contact",
  button2Path = "/services",
  onNavigate = () => {},
}) => {
  return (
    <section className="bg-[#F5F6F8] py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Image */}

          <div className="flex justify-center">

            <div className="rounded-[24px] sm:rounded-[36px] overflow-hidden">

              <img
                src={image}
                alt={title}
                className="w-full max-w-[520px] object-cover"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-[#18A9C7] text-sm">
              [{tag}]
            </span>

            <h1 className="mt-4 text-[32px] leading-[1.18] font-bold text-[#17233E] sm:text-[40px] lg:text-[48px]">
              {title}
            </h1>

            <p className="mt-6 sm:mt-8 text-gray-600 leading-7 sm:leading-8">
              {description}
            </p>
            {description1 && (
              <p className="mt-5 sm:mt-8 text-gray-600 leading-7 sm:leading-8">
                {description1}
              </p>
            )}

            <div className="border-t my-8" />

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-blue-500" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">

              {button1 && (
                <button
                  type="button"
                  onClick={() => onNavigate(button1Path)}
                  className="px-8 py-4 bg-[#17233E] text-white rounded-xl"
                >
                  {button1}
                </button>
              )}

              {button2 && (
                <button
                  type="button"
                  onClick={() => onNavigate(button2Path)}
                  className="px-8 py-4 border rounded-xl"
                >
                  {button2}
                </button>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
