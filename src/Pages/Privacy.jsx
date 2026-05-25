
/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../Components/SubHero";


const policyData = [
  {
    no: "01",
    title: "Privacy Policy",
    desc: `
At CSM TECH CORP, we are committed to protecting the privacy and confidentiality of our website visitors and users.

This Privacy Policy outlines the types of personal information we collect, how we use and protect that information, and the choices you have regarding your personal data.
    `,
  },

  {
    no: "02",
    title: "Information We Collect",
    list: [
      "Personal Information: Name, email address, phone number and details submitted via forms.",
      "Log Data: IP address, browser type, pages visited and interaction information.",
      "Cookies & Similar Technologies to improve browsing experience.",
    ],
  },

  {
    no: "03",
    title: "How We Use Your Information",
    list: [
      "Provide and improve services.",
      "Communication and updates.",
      "Analytics and marketing.",
      "Legal compliance and security.",
    ],
  },

  {
    no: "04",
    title: "Data Security",
    desc: `
We take reasonable measures to protect your personal information and maintain its confidentiality.
However, no transmission method over the internet is completely secure.
    `,
  },

  {
    no: "05",
    title: "Third-Party Links",
    desc: `
Our website may contain links to third-party websites or services.
Please review their privacy policies before sharing information.
    `,
  },

  {
    no: "06",
    title: "Updates to the Privacy Policy",
    desc: `
We may update this Privacy Policy periodically.
Continued use of our website indicates acceptance of updates.
    `,
  },

  {
    no: "07",
    title: "Contact Us",
    desc: `
If you have questions regarding this policy, contact us at:
privacy@csmtechcorp.com
    `,
  },
];
const Privacy = () => {
  return (
    <>
      <SubHero title="Privacy Policy" breadcrumb="Home / Privacy Policy" />
<section className="bg-white py-14 px-4 sm:px-6 sm:py-20">

      <div className="max-w-7xl mx-auto">

        <div className="space-y-10">

          {policyData.map((item, index) => (

            <div key={index}>

              <div className="flex flex-col items-start gap-3 sm:flex-row">

                <span
                  className="
                  text-[#C7D5F7]
                  text-[28px]
                  sm:text-[32px]
                  font-semibold
                  leading-none
                "
                >
                  {item.no}
                </span>

                <div className="flex-1">

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

                  {item.desc && (

                    <p
                      className="
                      mt-4
                      text-[#667085]
                      leading-8
                      whitespace-pre-line
                    "
                    >
                      {item.desc}
                    </p>

                  )}

                  {item.list && (

                    <ol
                      className="
                      mt-5
                      list-decimal
                      pl-5
                      text-[#667085]
                      space-y-3
                      leading-8
                    "
                    >

                      {item.list.map((text, i) => (

                        <li key={i}>
                          {text}
                        </li>

                      ))}

                    </ol>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Privacy;
