/* eslint-disable no-unused-vars */
import React from "react";

import mobile from "../assets/Allservice/mobile.png";
import website from "../assets/Allservice/website.png";
import erp from "../assets/Allservice/erp.png";
import digital from "../assets/Allservice/digital.png";

const services = [
  {
    title: "Mobile App Development",
    path: "/services/mobile",
    image: mobile,
    desc: "We build user-friendly, scalable mobile apps that help businesses connect with customers anytime, anywhere.",
  },
  {
    title: "Website Development",
    path: "/services/website",
    image: website,
    desc: "We create modern, responsive, and high-performing websites designed to grow your business online.",
  },
  {
    title: "ERP Services",
    path: "/services/erp",
    image: erp,
    desc: "We deliver smart ERP solutions to simplify operations, manage data, and improve business efficiency.",
  },
  {
    title: "Digital Marketing",
    path: "/services/digital",
    image: digital,
    desc: "We help your brand grow online with result-driven marketing strategies and powerful campaigns.",
  },
];

const AllServices = ({ onNavigate = () => {} }) => {
  return (
    <section className="bg-[#F4F4F4] py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          <span className="text-[#159DBB] uppercase text-lg">
            [Services]
          </span>

          <h2 className="mt-3 text-[30px] sm:text-[38px] md:text-[48px] font-bold text-[#17233E] leading-tight">
            Services Designed Around Your
            <br className="hidden sm:block" />
            Business Goals
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            From strategy to execution, we deliver solutions that help
            businesses perform better in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[360px] sm:h-[420px] rounded-[18px] overflow-hidden cursor-pointer"
              onClick={() => onNavigate(service.path)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 duration-500" />

              {/* Before Title */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 duration-300 sm:opacity-100 sm:group-hover:opacity-0">
                <div className="bg-black/65 backdrop-blur-md rounded-xl px-4 py-4">
                  <h3 className="text-white text-[20px] font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* After Hover Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end bg-black/60 opacity-100 translate-y-0 duration-500 sm:bg-transparent sm:opacity-0 sm:translate-y-8 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                <div>
                  <h3 className="text-white text-[20px] font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-6 mb-6">
                    {service.desc}
                  </p>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      onNavigate(service.path);
                    }}
                    className="w-full bg-[#15B6C9] text-white py-3 rounded-md text-sm font-medium hover:bg-[#0ea4b6] duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;
