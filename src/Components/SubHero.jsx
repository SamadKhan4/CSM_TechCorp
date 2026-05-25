/* eslint-disable no-unused-vars */
import React from 'react'
import BannerImage from "../assets/page-banner 1.png";

const SubHero = ({
  title = "Services",
  breadcrumb = "Home / Services",
  image = BannerImage,
}) => {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-[360px]
      sm:min-h-[420px]
      flex
      items-center
      "
    >
      {/* Background */}

      <img
        src={image}
        alt={title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#000C3F]/35" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8">

        <div className="mt-24 sm:mt-32">

          <h1
            className="
            text-white
            text-[32px]
            md:text-[56px]
            font-bold
            "
          >
            {title}
          </h1>

          <p
            className="
            mt-5
            text-white/90
            text-base
            sm:text-lg
            "
          >
            [{breadcrumb}]
          </p>

        </div>

      </div>
    </section>
  )
}

export default SubHero
