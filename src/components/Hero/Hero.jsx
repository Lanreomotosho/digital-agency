import React from 'react';
import HeroImg from "../../assets/website/team.png";

const Hero = () => {
    return (
        <>
        <main className='bg-white dark:bg-gray-950 dark:text-w
        duration-300'>
            <div className='container min-h-[620px] flex mt-10
            sm:mt-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5
                place-items-center'>
                    {/* Image section */}
                    <div className='order-1 sm:order-2 relative '>
                        <img src={HeroImg} alt="" />
                        <div className='bg-whiite dark:bg-gray-900 px-4
                       py-2 rounded-xl shadow-md absolute -bottom-5 -right-8'>
                            <p>🌟 Projects</p>
                            <h1 className='font-bold'>
                                600+ <span className='font-normal'>Done</span>
                            </h1>
                        </div>
                    </div>
                    {/* Text content section */}
                    <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                      <h1 className='text-4xl sm:text-5xl font-semibold'>
                      Building Brands in the 
                      <span className='text-primary'> Digital Agency </span>
                      </h1>
                      <p >
                        Your partner in navigating the ever-evolving 
                        landscape of digital marketing. 
                        From conceptualizing toexecution, we craft tailored solutions that drive results and elevate your brand to new heights.
                      </p>
                      <button className='btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Hero;