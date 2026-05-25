/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight } from "react-icons/fi";

import blog1 from "../assets/blog.png";
import blog2 from "../assets/blog.png";
import blog3 from "../assets/blog.png";
import blog4 from "../assets/blog.png";

const blogs = [
  {
    image: blog1,
    date: "January 10, 2026",
    title:
      "Top 7 Benefits of Having a Professional Business Website",

    desc:
      "A professional website builds trust, improves visibility, and helps you attract more customers.",
  },

  {
    image: blog2,
    date: "January 10, 2026",

    title:
      "Top 7 Benefits of Having a Professional Business Website",

    desc:
      "Discover why every business needs a modern website to grow online.",
  },

  {
    image: blog3,
    date: "January 10, 2026",

    title:
      "Top 7 Benefits of Having a Professional Business Website",

    desc:
      "Improve business performance with better visibility and customer trust.",
  },

  {
    image: blog4,
    date: "January 10, 2026",

    title:
      "Top 7 Benefits of Having a Professional Business Website",

    desc:
      "Build a stronger digital presence and reach more customers.",
  },
];

const BlogSection = ({
  tag = "Blog",
  title = "Insights & Latest Updates",

  subtitle = "Stay informed with the latest trends, expert insights, and industry updates from the world of technology.",

  posts = blogs,
  onNavigate = () => {},
}) => {
  return (
    <section className="bg-[#F6F7F9] py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-[#14A5BC]">
            [{tag}]
          </span>

          <h2
            className="
            mt-4
            text-[30px]
            sm:text-[42px]
            font-bold
            text-[#16284A]
          "
          >
            {title}
          </h2>

          <p
            className="
            mt-4
            text-[#6B7280]
            max-w-2xl
            mx-auto
          "
          >
            {subtitle}
          </p>

        </div>

        {/* Cards */}

        <div
          className="
          mt-10
          sm:mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >

          {posts.map((blog, index) => (

            <article
              key={index}
              className="
              rounded-xl
              overflow-hidden
              bg-[#EEF3F7]
              hover:-translate-y-2
              duration-300
            "
            >

              {/* Image */}

              <img
                src={blog.image}
                alt={blog.title}
                className="
                w-full
                h-[180px]
                object-cover
              "
              />

              <div className="p-5">

                <span
                  className="
                  text-[#6FA0D5]
                  text-xs
                "
                >
                  {blog.date}
                </span>

                <h3
                  className="
                  mt-3
                  text-[#16284A]
                  text-[20px]
                  font-semibold
                  leading-8
                "
                >
                  {blog.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-[#6B7280]
                  text-sm
                  leading-7
                "
                >
                  {blog.desc}
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate("/blog")}
                  className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-[#16B0C8]
                  font-medium
                "
                >
                  Read More

                  <FiArrowRight />
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogSection;
