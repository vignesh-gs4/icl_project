import React from "react";
import assets from "../assets/asset.js";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { bg_banner_lg, bg_banner_sm } = assets;

  return (
    <section className="relative my-10">
      {/* Background Images */}
      <img
        src={bg_banner_lg}
        className="hidden w-full lg:block object-cover"
        alt="banner"
      />
      <img
        src={bg_banner_sm}
        alt="banner"
        className="w-full lg:hidden object-cover"
      />

      {/* Overlay (ONLY MOBILE) */}
      <div className="absolute inset-0 bg-black/50 lg:bg-transparent flex items-center justify-center lg:justify-start">
        <div className="text-white w-full max-w-6xl px-6">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Master the Digital Skills of Tomorrow
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-lg text-gray-200 mb-6">
              From core programming to professional accounting, we provide
              industry-leading training in C, C++, Java, Python, Web Development,
              and Office Automation. Start your journey toward a successful tech
              career today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses">
                <button className="bg-lime-500 hover:bg-lime-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
                  Explore Courses
                </button>
              </Link>

              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;