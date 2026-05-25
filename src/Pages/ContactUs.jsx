
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../Components/SubHero";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import CTA from "../Components/CTA";
 const infoCards = [
    {
      icon: <FiMapPin />,
      title: "Office Address",
      text: "Plot No.47, 3rd Floor, Corporation House, 3379/47, Manakpur Ring Rd, Pratap Nagar, Nagpur, Maharashtra 440026",
    },
    {
      icon: <FiPhone />,
      title: "Phone Number",
      text: "Call us for quick assistance and consultation.\n\n+91 9637081988",
    },
    {
      icon: <FiMail />,
      title: "Email Address",
      text: "Send us your queries and our team will respond as soon as possible.\n\ninfo@csmtechcorp.com",
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      text: "Monday - Saturday: 10:00 AM - 7:00 PM\n\nSunday: Closed",
    },
  ];
const ContactUs = ({ onNavigate = () => {} }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "mailto:info@csmtechcorp.com";
  };

  return (
    <>
      <SubHero title="Contact Us" breadcrumb="Home / Contact" />
      <section className="bg-[#F6F7F9] px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#14A5BC] text-sm">[Contact Us]</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#17233E]">
            Feel free contact us today and get your solution
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {infoCards.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E1E5EA] rounded-xl p-7 min-h-[210px]"
              >
                <div className="w-11 h-11 rounded-full bg-[#EEF4FF] text-[#3B82F6] flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-[#17233E] font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4D5868] text-sm leading-6 whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#D5D9DF] rounded-xl p-5 sm:p-7"
          >
            {["Name", "Email", "Phone"].map((label) => (
              <label key={label} className="block mb-5">
                <span className="block text-[#17233E] font-medium mb-2">
                  {label}
                </span>
                <input
                  type={label === "Email" ? "email" : "text"}
                  placeholder={`Enter your ${label.toLowerCase()}${
                    label === "Name" ? " name" : ""
                  }`}
                  className="w-full border border-[#D5D9DF] rounded-lg px-4 py-3 outline-none"
                />
              </label>
            ))}

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
    <CTA onNavigate={onNavigate} />
    </>
  );
};

export default ContactUs;
