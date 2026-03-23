import React from 'react'
import HeroSection from '../components/HeroSection'
import HomeSection from '../components/HomeSection';

const Home = () => {
  return (
   <main className='lg:px-20 px-4'>
    <HeroSection />
    <HomeSection />
   </main>
  )
};

export default Home;