import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BrandLogo from './components/BrandLogo/BrandLogo';
import Services from './components/Services/Services';
import Testimonies from './components/Testimonials/Testimonials';
import BlogsComp from './components/BlogsComp/BlogsComp';
import BlogCard from './components/BlogCard/BlogCard';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
<div className="overflow-x-hidden bg-white dark:bg-black
duration-300">
    <Navbar />
    <Hero />
    <BrandLogo />
    <Services />
    <Testimonies />
    <BlogsComp />
    <BlogCard />
    <Footer />
  </div>
  );
};

export default App;