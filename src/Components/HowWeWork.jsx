/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HowWeWork = ({
  tag = "How We Work",
  title = "4 Simple Steps to Success",
  description =
    "At csm techcorp, we bring together strategic insight, advanced technology",

  buttonText = "Learn More",
  buttonPath = "/about",
  onNavigate = () => {},

  steps = [
    {
      number: "01",
      title: "Discovery & Strategic",
      subtitle: "Planning",
      active: true,
    },

    {
      number: "02",
      title: "Solution Design &",
      subtitle: "Development",
    },

    {
      number: "03",
      title: "User Testing &",
      subtitle: "Feedback",
    },

    {
      number: "04",
      title: "Optimization &",
      subtitle: "Ongoing Support",
    },
  ],
}) => {
  return (
    <section className="bg-[#F6F7F9] py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-5 items-stretch">

          {/* Left */}

          <div className="flex flex-col justify-between gap-5">

            <StepCard
              step={steps[0]}
              active
            />

            <p
              className="
              text-[#667085]
              text-sm
              leading-7
              max-w-[320px]
              mt-auto
            "
            >
              {description}
            </p>

          </div>

          {/* Middle */}

          <div className="grid gap-5">

            {steps.slice(1, 3).map(
              (step, index) => (
                <StepCard
                  key={index}
                  step={step}
                />
              )
            )}

          </div>

          {/* Right */}

          <div className="grid gap-5">

            {/* Border Removed */}

            <div
              className="
              min-h-[220px]
              p-1
              flex
              flex-col
              justify-center
              bg-transparent
            "
            >

              <span className="text-[#0E9DB3] text-sm">
                [{tag}]
              </span>

              <h2
                className="
                mt-8
                text-[#14213D]
                text-[30px]
                sm:text-[40px]
                font-semibold
                leading-tight
              "
              >
                {title}
              </h2>

              {buttonText && (
                <button
                  type="button"
                  onClick={() => onNavigate(buttonPath)}
                  className="
                  mt-9
                  w-fit
                  bg-[#18AFC1]
                  text-white
                  px-8
                  py-3
                  rounded-lg
                  hover:bg-[#159DB3]
                  duration-300
                "
                >
                  {buttonText}
                </button>
              )}

            </div>

            {steps[3] && (
              <StepCard step={steps[3]} />
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

const StepCard = ({
  step,
  active = false,
}) => {
  return (
    <div
      className={`
        relative
        min-h-[190px]
        sm:min-h-[220px]
        p-6
        sm:p-8
        border
        duration-300
        hover:translate-y-[-4px]

        ${
          active
            ? "bg-[#2CB6C5] border-[#2CB6C5]"
            : "bg-[#F6F7F9] border-[#AAB0BB]"
        }
      `}
    >

      <h3
        className={`
        text-[56px]
        sm:text-[78px]
        leading-none
        font-medium

        ${
          active
            ? "text-white"
            : "text-[#16284A]"
        }
      `}
      >
        {step.number}
      </h3>

      <div className="mt-8">

        <p
          className={`
          font-medium
          ${
            active
              ? "text-white"
              : "text-[#48546B]"
          }
        `}
        >
          {step.title}
        </p>

        <p
          className={`
          mt-4
          font-medium
          ${
            active
              ? "text-white"
              : "text-[#48546B]"
          }
        `}
        >
          {step.subtitle}
        </p>

      </div>

      <div
        className={`
        absolute
        right-8
        bottom-8
        w-8
        h-8
        rounded-full
        flex
        items-center
        justify-center

        ${
          active
            ? "bg-[#1B4E5A]"
            : "bg-[#42B1C8]"
        }
      `}
      >

        <FiArrowUpRight
          className="text-white"
        />

      </div>

    </div>
  );
};

export default HowWeWork;
