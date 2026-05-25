/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Jha",
    role: "Business Client",
    text: "OSSS Consulting Services delivered our project on time with excellent quality. Their team was responsive, professional, and easy to work with.",
    image: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Santosh K",
    role: "Startup Founder",
    text: "Their developers understood our requirements quickly and built a solution that perfectly matched our needs. Highly recommended.",
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    text: "The team helped us improve our online presence with a clean website and effective digital marketing strategy.",
    image: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    text: "Professional support, clear communication, and reliable delivery. We are very satisfied with the results.",
    image: "https://i.pravatar.cc/80?img=15",
  },
  {
    name: "Neha Singh",
    role: "Product Lead",
    text: "Their technical expertise and attention to detail made the entire project smooth from planning to launch.",
    image: "https://i.pravatar.cc/80?img=25",
  },
  {
    name: "Karan Mehta",
    role: "Entrepreneur",
    text: "A dependable team for web development and IT support. They delivered exactly what we needed.",
    image: "https://i.pravatar.cc/80?img=18",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const maxIndex = testimonials.length - 2;

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full bg-[#dedede] py-12 md:py-[70px] px-4 md:px-8 lg:px-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-10 lg:gap-[85px] items-start">
        {/* Left Content */}
        <div className="pt-[2px]">
          <span className="inline-flex items-center justify-center min-h-[30px] px-5 rounded-full border border-[#2637e8]/60 bg-white/30 text-[#2637e8] text-[14px] md:text-[16px] leading-none mb-5">
            Client Feedback
          </span>

          <h2 className="text-[#202020] text-[28px] md:text-[36px] font-extrabold leading-[1.25] md:leading-[1.35] tracking-[0.2px] mb-5">
            Hear From Clients <br />
            Testimonials.
          </h2>

          <p className="text-[#111] text-[16px] md:text-[21px] leading-[1.5] md:leading-[1.32] max-w-[410px] font-medium">
            We are proud to work with businesses across industries and deliver
            solutions that create real results. Here’s what our clients say about
            their experience with OSSS Consulting Services.
          </p>
        </div>

        {/* Right Slider Area */}
        <div className="w-full overflow-hidden">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 50}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[50%] px-[10px]"
                >
                  <div className="relative bg-white rounded-[8px] min-h-[300px] md:min-h-[276px] overflow-visible pb-[76px]">
                    {/* Quote Icon */}
                    <div className="absolute -top-[1px] right-[20px] md:right-[40px] w-[56px] md:w-[66px] h-[50px] md:h-[58px] bg-[#dedede] rounded-bl-[12px] flex items-start justify-center">
                      <Quote
                        size={52}
                        className="text-[#2637e8] fill-[#2637e8]"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Stars */}
                    <div className="px-5 md:px-[28px] pt-[28px] text-[#f7b51e] text-[20px] md:text-[23px] tracking-[1px]">
                      ★★★★★
                    </div>

                    {/* Text */}
                    <div className="px-5 md:px-[28px] pt-[14px] md:pr-[38px]">
                      <p className="text-[#111] text-[15px] md:text-[18px] leading-[1.5] md:leading-[1.33] font-medium">
                        {item.text}
                      </p>
                    </div>

                    {/* Bottom Author */}
                    <div className="absolute left-0 right-0 bottom-0 min-h-[68px] border-t border-black/20 px-5 md:px-[28px] py-3 flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-[18px] md:text-[21px] leading-none font-bold text-[#111]">
                          {item.name}
                        </h4>
                        <p className="text-[11px] italic text-[#222] mt-2">
                          {item.role}
                        </p>
                      </div>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-[22px] mt-[32px] md:mt-[40px]">
            <button
              type="button"
              onClick={prevSlide}
              className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center text-[#2637e8] hover:bg-[#2637e8] hover:text-white transition"
            >
              <ChevronLeft size={34} strokeWidth={3} />
            </button>

            <div className="flex items-center gap-[8px]">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setCurrent(dot * 2 > maxIndex ? maxIndex : dot * 2)}
                  className={`w-[10px] h-[10px] rounded-full transition ${
                    current === dot * 2 || current === dot * 2 + 1
                      ? "bg-[#2637e8]"
                      : "bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center text-[#2637e8] hover:bg-[#2637e8] hover:text-white transition"
            >
              <ChevronRight size={34} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
