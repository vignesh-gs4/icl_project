import React from 'react'
import assets from "../assets/asset.js"
import { Link } from "react-router-dom"

const HeroSection = () => {
  const { bg_banner_lg, bg_banner_sm } = assets;

  return (
    <section className="relative my-10">
      <img src={bg_banner_lg} className='hidden w-full lg:block' alt="banner" />
      <img src={bg_banner_sm} alt="banner" className='w-full lg:hidden' />
      <div className='absolute inset-0 flex items-center justify-center lg:justify-start'>
        <div className='text-white'>
          <div className='max-w-3xl md:text-left text-center p-4'>
            <h1 className='text-3xl font-bold md:text-5xl my-3'>
              Master the Digital Skills of Tomorrow
            </h1>
            <h2 className='text-xl md:text-lg md:font-semibold'>
              From core programming to professional accounting, we provide industry-leading training in C, C++, Java, Python, Web Development, and Office Automation. Start your journey toward a successful tech career today
            </h2>
            <div className='flex gap-5 my-10'>
              <button
                className='bg-lime-500 text-white p-2'
              >Courses</button>
              <button
                className='bg-yellow-500 text-white p-2'
              >Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection