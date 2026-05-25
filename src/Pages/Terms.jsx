
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../Components/SubHero";
const terms = [
  {
    no: "01",
    title: "Acceptance of Terms",
    desc:
      "These Terms and Conditions govern your use of the website. By accessing or using the Website, you agree to be bound by this Agreement.",
  },
  {
    no: "02",
    title: "Intellectual Property",
    desc:
      "All content including text, graphics, logos, software and trademarks are protected under intellectual property laws.",
  },
  {
    no: "03",
    title: "Use of the Website",
    desc:
      "You agree to use the Website for lawful purposes and maintain the confidentiality of your account credentials.",
  },
  {
    no: "04",
    title: "Third-Party Links",
    desc:
      "The Website may contain links to external services. We are not responsible for third-party content or privacy policies.",
  },
  {
    no: "05",
    title: "Disclaimer of Warranties",
    desc:
      "The Website and services are provided on an as-is basis without warranties of any kind.",
  },
  {
    no: "06",
    title: "Limitation of Liability",
    desc:
      "We shall not be liable for indirect, incidental, or consequential damages arising from website usage.",
  },
  {
    no: "07",
    title: "Indemnification",
    desc:
      "You agree to indemnify and hold harmless the company from claims resulting from your use of the Website.",
  },
  {
    no: "08",
    title: "Governing Law and Jurisdiction",
    desc:
      "These Terms shall be governed by applicable laws and disputes will be subject to local jurisdiction.",
  },
  {
    no: "09",
    title: "Severability",
    desc:
      "If any provision is found invalid, remaining provisions remain enforceable.",
  },
  {
    no: "10",
    title: "Changes to the Agreement",
    desc:
      "We reserve the right to update these Terms at any time. Continued use means acceptance of updates.",
  },
];
const Terms = () => {
  return (
    <>
      <SubHero title="Terms & Conditions" breadcrumb="Home / Terms" />
    <section className="bg-white py-14 px-4 sm:px-6 sm:py-20">

      <div className="max-w-7xl mx-auto">

        <div className="space-y-10">

          {terms.map((item) => (

            <div key={item.no}>

              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">

                <span
                  className="
                  text-[#B9C9F3]
                  text-[28px]
                  sm:text-[34px]
                  font-semibold
                "
                >
                  {item.no}
                </span>

                <h2
                  className="
                  text-[#17233E]
                  text-[26px]
                  sm:text-[34px]
                  font-semibold
                "
                >
                  {item.title}
                </h2>

              </div>

              <p
                className="
                mt-4
                text-[#667085]
                leading-8
                max-w-[1200px]
              "
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Terms;
