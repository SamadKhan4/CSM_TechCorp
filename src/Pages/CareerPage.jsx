
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../Components/SubHero";
import CTA from "../Components/CTA";
import WhyChooseUs from "../Components/WhyChooseUs";

const jobs = [
  {
    type: "Full Time",
    title: "Web Developer",
    desc: "Work on modern, responsive, and user-friendly websites using the latest development practices.",
  },
  {
    type: "Full Time",
    title: "Mobile App Developer",
    desc: "Build smooth, scalable, and performance-focused mobile applications for business needs.",
  },
  {
    type: "Full Time",
    title: "UI/UX Designer",
    desc: "Create clean, attractive, and user-friendly designs for websites, mobile apps, and digital platforms.",
  },
  {
    type: "Full Time",
    title: "Digital Marketing Executive",
    desc: "Plan and execute strategies for SEO, social media, online branding, and lead generation.",
  },
];

const CareerPage = ({ onNavigate = () => {} }) => {
  const scrollToForm = (position) => {
    const input = document.getElementById("career-position");
    if (input) input.value = position;
    document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNavigate("/contact");
  };

  return (
    <>
      <SubHero title="Careers" breadcrumb="Home / Careers" />

      <section className="bg-[#F6F7F9] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#15AFC2] text-sm">[Career]</span>

          <h2 className="mt-3 text-[#17233E] text-3xl md:text-4xl font-semibold">
            Build Your Career With CSM Techcorp
          </h2>

          <p className="mt-4 text-[#5F6B7A] leading-6">
            At CSM Techcorp Pvt. Ltd., we believe that great ideas come from
            passionate people. We are always looking for creative thinkers,
            problem solvers, developers, designers, marketers, and technology
            enthusiasts who want to grow with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          
          <div className="grid sm:grid-cols-2 gap-5">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-[#D5D9DF] rounded-2xl p-6 flex flex-col justify-between min-h-[205px]"
              >
                <div>
                  <span className="text-[#188CC8] text-sm font-medium">
                    {job.type}
                  </span>

                  <h3 className="mt-3 text-[#17233E] text-2xl font-semibold">
                    {job.title}
                  </h3>

                  <p className="mt-4 text-[#4D5868] leading-6">
                    {job.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToForm(job.title)}
                  className="mt-6 w-fit bg-[#18AFC1] text-white px-6 py-3 rounded-lg text-sm"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <form
            id="career-form"
            onSubmit={handleSubmit}
            className="bg-white border border-[#D5D9DF] rounded-2xl p-5 sm:p-6"
          >
            <label className="block mb-4">
              <span className="block text-[#17233E] font-medium mb-2">
                Name
              </span>
              <input
                id="career-position"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-[#D5D9DF] rounded-lg px-4 py-3 outline-none"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-[#17233E] font-medium mb-2">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#D5D9DF] rounded-lg px-4 py-3 outline-none"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-[#17233E] font-medium mb-2">
                Job Position
              </span>
              <input
                type="text"
                placeholder="Job Position"
                className="w-full border border-[#D5D9DF] rounded-lg px-4 py-3 outline-none"
              />
            </label>

            <label className="block mb-8">
              <span className="block text-[#17233E] font-medium mb-2">
                Comment
              </span>
              <textarea
                placeholder="comment"
                rows="6"
                className="w-full border border-[#D5D9DF] rounded-lg px-4 py-3 outline-none resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#18AFC1] text-white py-4 rounded-lg hover:bg-[#1299AA] duration-300"
            >
              Send application
            </button>
          </form>

        </div>
      </div>
    </section>
      <WhyChooseUs />
      <CTA onNavigate={onNavigate} />
    </>
  );
};

export default CareerPage;
