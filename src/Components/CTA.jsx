/* eslint-disable no-unused-vars */
import React from "react";
import CTAImage from "../assets/CTA.png";

const CTA = ({
  title = "Let's Build Something Exceptional Together",
  placeholder = "Type your email here",
  buttonText = "Learn More",
  onNavigate = () => {},
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onNavigate("/contact");
  };

  return (
    <section className="bg-[#F5F6F8] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] min-h-[300px] sm:min-h-[260px] flex items-center justify-center px-5 sm:px-8">
          <img
            src={CTAImage}
            alt="CTA"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 w-full text-center">
            <h2 className="mb-5 text-white text-[26px] leading-tight font-semibold md:text-[40px]">
              {title}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-[520px] flex-col items-center justify-center gap-3 rounded-xl sm:flex-row sm:gap-0 sm:overflow-hidden"
            >
              <input
                type="email"
                placeholder={placeholder}
                className="h-[56px] w-full rounded-xl bg-white/20 px-5 text-white outline-none backdrop-blur-md placeholder:text-white/70 sm:rounded-none"
              />

              <button
                type="submit"
                className="h-[56px] w-full rounded-xl bg-white px-10 font-medium text-[#1E2446] duration-300 hover:bg-gray-100 sm:w-auto sm:rounded-none"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
