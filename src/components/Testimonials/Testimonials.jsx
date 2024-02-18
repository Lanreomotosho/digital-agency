import React from 'react';
import Slider from 'react-slick';



const TestimonialData = [
    {
        id: 1,
        name: "David James - Directior of Design Operation, New York",
        text: "The results have been incredibl. With Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
        img: "https://www.seema.com/wp-content/uploads/2022/07/work-clothes-for-men.jpg",
    },
    {
        id: 2,
        name: "Peter Moses - Directior of Head of Marketing, Uk",
        text: "The results have been incredibl. With Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
        img: "https://i.pinimg.com/736x/02/bb/91/02bb91e7384431515474e44f3d952120.jpg",
    },
    {
        id: 3,
        name: "Victoria Clarer - Head of Research, Department",
        text: "The results have been incredibl. With Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
        img: "https://img.freepik.com/premium-photo/black-woman-portrait-happy-business-entrepreneur-smile-employee-desk-modern-office-startup-young-african-american-female-professional-worker-with-career-motivation-vision-happiness_590464-84963.jpg",
    },

];
const Testimonials = () => {
  const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseonHover: true,
            pauseOnFocus: true,
    };
    return (
        <>
    <div className='py-10 dark:text-white'>
        <div className="container">
            {/* testimonial section*/}
            <div className='grid grid-cols-1 max-w-screen-xl
            mx-auto gap-6'>
                <Slider { ...settings}>
                {TestimonialData.map(({ id, name, text, img }) => (
                        <div key={id} className='my-6'>
                            <div className='flex flex-col sm:flex-row
                            gap-5 md:gap-14 p-4 mx-4 rounded-xl
                            dark:bg-gray-800 relative'>
                                <img
                                src={img}
                                alt=""
                                className='block mx-auto h-[300px] w-full
                                sm:w-[200px] object-cover'
                                 />
                            </div>
                            <div className='space-y-4'>
                                <p className='text-gray-500 text-black/80
                                dark:text-white/80 xl:pr-40'>
                                    {text}
                                    </p>
                                <h1 className='text-xl font-bold'>{name}</h1>
                            </div>
                            <p className="text-black/10 text-[12rem]
                            font-serif absolute bottom-0 right-0">
                                ''
                          </p>
                        </div>
                   ))}
                </Slider>
            </div>
        </div>
    </div>
    </>
    );
}

export default Testimonials;