import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const FooterLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Features",
        link: "/#features",
    },
    {
        title: "Works",
        link: "/#works",
    },
    {
        title: "Career",
        link: "/#career",
    },
    {
        title: "About",
        link: "/#about",
    },
];

const HelpLinks = [
    {
        title: "Customer Support",
        link: "/#support",
    },
    {
        title: "Delivery Details",
        link: "/#delivery-details",
    },
    {
        title: "Terms & Conditions",
        link: "/#terms",
    },
];

const ResoursesLink = [
    {
        title: "Free Ebooks",
        link:"/#ebooks",
    },
    {
        title: "How to Blog",
        link:"/#blogs",
    },

];

const Footer = () => {
  return (
    <>
    <div className='bg-black/95 text-white'>
        <div className='container'>
            <div className='grid md:grid-cols-3 py-5'>
{/* company details */}
<div className='py-8 px-4'>
    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 
    flex items-center gap-3'>
        Digital Agency
    </h1>
    <p className='text-sm'>
    Digital agency is a specialized firm that provides a wide array of services to help businesses establish and 
    enhance their online presence. These agencies typically offer services such as web design and development, search engine optimization (SEO), social media marketing, content creation, digital advertising, 
    email marketing, and more. By leveraging cutting-edge technology and industry expertise, digital agencies assist businesses in reaching their marketing goals and driving growth in the digital realm{""}
    </p>
    <br />
    {/* Social Handle */}
    <div className='flex items-center gap-4 mt-6'>
        <a href='#'>
            <FaFacebook className='text-2xl
            hover:text-primary duration-300' />
        </a>
        <a href='#'>
            <FaInstagram className='text-2xl
            hover:text-primary duration-300' />
        </a>
        <a href='https://www.linkedin.com/in/lanreomotosho'>
            <FaLinkedin className='text-2xl
            hover:text-primary duration-300' />
        </a>
        <a href='#'>
            <FaTwitter className='text-2xl
            hover:text-primary duration-300' />
        </a>
    </div>
</div>
{/* Link section*/}
<div className='grid grid-cols-2 sm:grid-cols-3
col-span-2 md:pl-10'>
    {/* first col */}
    <div>
        <div className='py-8 px-4'>
            <h1 className='text-xl font-bold'>Company</h1>
            <ul className='space-y-3'>
                    {FooterLinks.map((link) =>(
               <li
                   key={link.title}
                   className="cursor-pointer
                   hover:translate-x-1 duration-300
                   hover:!text-primary space-x-1
                   text-gray-400" >
                    <span>{link.title}</span>
                    </li>
                    ))}
            </ul>
        </div>
    </div>
    {/* second col */}
    <div>
        <div className='py-8 px-4'>
            <h1 className='text-xl font-bold'>Help</h1>
            <ul className='space-y-3'>
                    {HelpLinks.map((link) =>(
               <li
                   key={link.title}
                   className="cursor-pointer
                   hover:translate-x-1 duration-300
                   hover:!text-primary space-x-1
                   text-gray-400" >
                    <span>{link.title}</span>
                    </li>
                    ))}
            </ul>
        </div>
    </div>
    {/* third col */}
    <div>
        <div className='py-8 px-4'>
            <h1 className='text-xl font-bold'>Resourses</h1>
            <ul className='space-y-3'>
                    {ResoursesLink.map((link) =>(
               <li
                   key={link.title}
                   className="cursor-pointer
                   hover:translate-x-1 duration-300
                   hover:!text-primary space-x-1
                   text-gray-400" >
                    <span>{link.title}</span>
                    </li>
                    ))}
            </ul>
        </div>
              </div>
             </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;