/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Footer.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Career", path: "/career" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { label: "ERP Services", path: "/services/erp" },
  { label: "Web Design & Development", path: "/services/website" },
  { label: "Mobile App Development", path: "/services/mobile" },
  { label: "Digital Marketing", path: "/services/digital" },
];

const Footer = ({ onNavigate = () => {} }) => {
  return (
    <footer className="bg-[#14243D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Left */}
          <div>
            <button type="button" onClick={() => onNavigate("/")}>
              <img src={logo} alt="logo" className="h-24 w-auto sm:h-28" />
            </button>

            <h3 className="text-[26px] sm:text-[34px] font-semibold mb-4">
              About Company.
            </h3>

            <p className="text-[18px] sm:text-[22px] text-gray-300 leading-[1.6] mb-8">
              Empowering Futures, Crafting Solutions.
            </p>

            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaLinkedin, FaXTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="/"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#071B3A] hover:scale-110 duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[24px] sm:text-[32px] font-semibold mb-6 sm:mb-8">Quick Links</h4>

            <ul className="space-y-4 sm:space-y-5 text-gray-300 text-[17px] sm:text-[20px]">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className="hover:text-cyan-400 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[24px] sm:text-[32px] font-semibold mb-6 sm:mb-8">Services</h4>

            <ul className="space-y-4 sm:space-y-5 text-gray-300 text-[17px] sm:text-[20px]">
              {serviceLinks.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className="hover:text-cyan-400 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[24px] sm:text-[32px] font-semibold mb-6 sm:mb-8">Contact</h4>

            <div className="space-y-8 text-gray-300">
              <div>
                <h5 className="font-semibold text-white text-[18px] sm:text-[22px] mb-3">
                  Operational Address:
                </h5>

                <p className="text-[16px] sm:text-[18px] leading-7 sm:leading-8">
                  Plot No.47, 3rd Floor, Kotwalnagar, Khamla Nagpur,
                  Maharashtra, 440022 India.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-white text-[18px] sm:text-[22px] mb-3">
                  Registered Office:
                </h5>

                <p className="text-[16px] sm:text-[18px] leading-7 sm:leading-8">
                  Rh.c-8 Shyamsundar R/h Vitthal, Vilholi, Nashik,
                  Maharashtra, India, 422010
                </p>
              </div>

              <a
                href="mailto:hr-info@csmtechcorp.com"
                className="inline-block break-all underline text-[16px] sm:text-[18px]"
              >
                hr-info@csmtechcorp.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-wrap gap-5 sm:gap-8 text-gray-300">
            <button type="button" onClick={() => onNavigate("/privacy")}>
              Privacy Policy
            </button>

            <button type="button" onClick={() => onNavigate("/terms")}>
              Terms & Conditions
            </button>
          </div>

          <p className="text-gray-300 text-center">
            Copyright &copy; 2026 Designed and developed by{" "}
            <span className="underline">Adbornsolutions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
