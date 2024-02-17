import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from "react-icons/gi";
import {SlNote } from "react-icons/sl";

const skillsData = [
    {
    name: "Web Developement",
    icon: <FaCameraRetro className='text-4xl text-primary' />,
    link: "#",
    description: "Web development is the art and science of creating websites and web applications that are accessible and interactive on the World Wide Web. It encompasses a wide range of disciplines, including front-end development, back-end development, and web design.",
    aosDelay: "0",
},
{
    name: "Web Designing",
    icon: <GiNotebook className='text-4xl text-primary' />,
    link: "#",
    description: "Web design is the process of creating the visual aesthetics and user experience of a website. It involves designing layouts, choosing color schemes, selecting typography, and creating graphical elements. Designers often use tools like Adobe Photoshop, Sketch, or Figma to create mockups and prototypes of the website before implementation.",
    aosDelay: "300",
},
{
    name: "Graphics Designing",
    icon: <SlNote className='text-4xl text-primary' />,
    link: "#",
    description: "Graphics design is a creative process that involves visual communication and problem-solving through the use of typography, photography, illustration, and layout techniques. It encompasses a wide range of mediums, including print and digital media, to convey messages, evoke emotions, and engage audiences effectively.",
    aosDelay: "500",
},
{
    name: "Digital Marketing",
    icon: <SlNote className='text-4xl text-primary' />,
    link: "#",
    description: "Digital marketing is the cornerstone of modern business growth, enabling companies to reach, engage, and convert audiences in the ever-expanding digital landscape. By harnessing various online channels and strategies, digital marketing empowers businesses to connect with their target customers effectively",
    aosDelay: "700",
},
];

const Services = () => {
    return <div className='bg-gray-100 dark:bg-black dark:text-white
    py-12 sm:grid sm:place-items-center'>
        <div className='container'>
            {/* header section */}
            <div className='pb-12 text-center space-y-3'>
                <h1 className='text-3xl font-semibold
                text-violet-950 dark:text-primary'>
                    Explore Our Services</h1>
                <p>
                    We are self-service data analytics software that lets you create visually.
                </p>
                </div>
{/* card section */}
<div className='grid grid-cols-1 md:grid-cols-2
xl:grid-cols-4 gap-4'>
    {skillsData.map((skill) => (
        <div
        key={skill.name}
        data-aos="fade-up"
        data-aos-delay={skill.aosDelay}
        className='Card space-y-3 sm:space-y-4 p-4'
        >
            <div>{skill.icon}</div>
            <h1 className='text-lg font-semibold'> {skill.name}</h1>
            <p className='text-gray-600 dark:text-gray-400'>
                {skill.description}
            </p>
            </div>
    ))}
</div>
{/* button section */}
            </div>
        </div>
};

export default Services;


