import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ image, title, description }) => {
  return  <>
  <div className='dark:text-white group'>
    <div className='overflow-hidden'>
    <img 
    src={image} 
    alt=""
    className='mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300'
     />
     <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <div className='flex justify-end pr-4 text-gray-500'>
        <FaArrowRight className="group-hover:text-primary
        group-hover:translate-x-2 duration-300" />
     </div>
     </div>
    </div>
  </div>
  </>;
};

export default BlogCard;