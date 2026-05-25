import React from "react";

import {
  FiLogIn,
  FiGrid,
  FiCreditCard,
  FiBell,
  FiMapPin,
  FiBarChart2,
} from "react-icons/fi";

const defaultFeatures = [
  {
    icon: <FiLogIn />,
    title: "User Login",
    desc: "OAuth, Biometrics, and Social integration.",
  },

  {
    icon: <FiGrid />,
    title: "Admin Dashboard",
    desc: "Real-time control over users and content.",
  },

  {
    icon: <FiCreditCard />,
    title: "Payment Gateway",
    desc: "Secure PCI-compliant transaction flows.",
  },

  {
    icon: <FiBell />,
    title: "Push Notifications",
    desc: "Custom alerts and promotional triggers.",
  },

  {
    icon: <FiMapPin />,
    title: "GPS & Maps",
    desc: "Precise geolocation and routing logic.",
  },

  {
    icon: <FiBarChart2 />,
    title: "In-App Analytics",
    desc: "Comprehensive tracking of user behavior.",
  },
];

const KeyFeature = ({
  tag,
  title = "Key Features We Integrate",
  subtitle,
  features = defaultFeatures,
  columns = "lg:grid-cols-3",
}) => {
  return (
    <section className="bg-[#F6F7F9] py-14 sm:py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          {tag && (
            <span className="text-[#14A5BC] text-sm">
              [{tag}]
            </span>
          )}

          <h2 className="mt-3 text-[30px] font-bold text-[#17233E] sm:text-[42px]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-5 text-[#667085] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

        </div>

        {/* Cards */}

        <div
          className={`
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            ${columns}
            gap-5
          `}
        >

          {features.map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-md
              px-5
              sm:px-6
              py-7
              flex
              flex-col
              sm:flex-row
              gap-4
              items-start
              hover:shadow-md
              duration-300
            "
            >

              {/* Icon */}

              <div
                className="
                min-w-[40px]
                h-[40px]
                rounded-md
                bg-[#EEF4FF]
                flex
                items-center
                justify-center
                text-[#2B63D9]
                text-[18px]
              "
              >

                {typeof item.icon === "string"
                  ? item.icon
                  : item.icon}

              </div>

              {/* Content */}

              <div>

                <h3
                  className="
                  text-[#17233E]
                  font-semibold
                  text-[20px]
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-[#667085]
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

    </section>
  );
};

export default KeyFeature;
