import React from 'react';
import Img1 from 'assets/Img1';


const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Realtime analytics",
        description:
        "The result has been incfredible, With the Power of Digital, it feels like they're in our trench, suppoting  and understanding us. They're like a partner and mentor in helping us get where we want to be. The results have been incredible.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 2,
        image: Img2,
        title: "Realtime analytics",
        description:
        "The result has been incfredible, With the Power of Digital, it feels like they're in our trench, suppoting  and understanding us. They're like a partner and mentor in helping us get where we want to be. The results have been incredible.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 3,
        image: Img3,
        title: "Realtime analytics",
        description:
        "The result has been incfredible, With the Power of Digital, it feels like they're in our trench, suppoting  and understanding us. They're like a partner and mentor in helping us get where we want to be. The results have been incredible.",
        author: "Someone",
        date: "April 22, 2022",
    },
]



const BlogsComp = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-900
    dark:text-white py-10 pb-14'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2
            text=3xl font-semibold'>Our Blogs</h1>
            {/* Blogs card */}
            {
                BlogsData.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))
            }
        </div>
        </div>
    </>
  )
}

export default BlogsComp;