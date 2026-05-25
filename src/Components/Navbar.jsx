/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/NavLogo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const serviceItems = [
  { label: "All Services", path: "/services" },
  { label: "ERP Services", path: "/services/erp" },
  { label: "Web Development", path: "/services/website" },
  { label: "Mobile App", path: "/services/mobile" },
  { label: "Digital Marketing", path: "/services/digital" },
];

const Navbar = ({ activePath = "/", onNavigate = () => {} }) => {
  const isServicesActive = activePath.startsWith("/services");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent px-3 py-4 sm:px-4 sm:py-5">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-white/25 rounded-[24px] md:rounded-full px-4 sm:px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="CSM Techcorp India"
            className="h-10 w-auto"
          />
        </button>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-7 text-black font-medium text-[16px]">
          {navItems.slice(0, 2).map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`cursor-pointer transition hover:text-[#08AFC6] ${
                  activePath === item.path ? "text-[#08AFC6]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}

          <li className="relative group">
            <button
              type="button"
              onClick={() => handleNavigate("/services")}
              className={`cursor-pointer transition hover:text-[#08AFC6] flex items-center gap-1 ${
                isServicesActive ? "text-[#08AFC6]" : ""
              }`}
            >
              Services <FiChevronDown size={18} />
            </button>

            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/20 bg-white p-3 text-[#101B33] shadow-2xl">
                {serviceItems.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNavigate(item.path)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition hover:bg-[#E8FAFD] hover:text-[#08AFC6] ${
                      activePath === item.path ? "bg-[#E8FAFD] text-[#08AFC6]" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </li>

          {navItems.slice(2).map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`cursor-pointer transition hover:text-[#08AFC6] ${
                  activePath === item.path ? "text-[#08AFC6]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          type="button"
          onClick={() => handleNavigate("/contact")}
          className="hidden md:flex items-center gap-2 bg-[#16A9BD] hover:bg-[#0d95a8] text-white px-6 py-3 rounded-full text-[16px] font-medium transition"
        >
          Let's Talk <FiArrowRight size={20} />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-[#16A9BD] text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 border-t border-slate-200 pt-4">
            <div className="grid gap-2 text-[#101B33] font-medium">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className={`rounded-xl px-4 py-3 text-left ${
                    activePath === item.path ? "bg-[#E8FAFD] text-[#08AFC6]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="rounded-xl bg-slate-50 p-2">
                <button
                  type="button"
                  onClick={() => handleNavigate("/services")}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left ${
                    isServicesActive ? "text-[#08AFC6]" : ""
                  }`}
                >
                  Services <FiChevronDown size={18} />
                </button>
                <div className="mt-1 grid gap-1">
                  {serviceItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className={`rounded-lg px-5 py-2 text-left text-sm ${
                        activePath === item.path
                          ? "bg-white text-[#08AFC6]"
                          : "text-slate-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {navItems.slice(2).map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className={`rounded-xl px-4 py-3 text-left ${
                    activePath === item.path ? "bg-[#E8FAFD] text-[#08AFC6]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNavigate("/contact")}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#16A9BD] px-6 py-3 text-white"
              >
                Let's Talk <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
