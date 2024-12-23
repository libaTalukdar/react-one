import React from 'react'

import Image1 from "../../assets/mens-wear.jpg";
import Image2 from "../../assets/women-wear.jpg";
import Image3 from "../../assets/childreen-wear.jpg";


const ImageList = [
    {
        id:1,
        img:Image1,
        title:"upto 30% off on al Men wear",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim! Sunt, vero"
        
    },
    {
        id:2,
        img:Image2,
        title:"upto 30% off on al Men wear",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim! Sunt, vero"
        
    },
    {
        id:3,
        img:Image3,
        title:"upto 30% off on al Men wear",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim! Sunt, vero"
        
    },
   
]

const Hero = () => {
    
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100
    flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
       {/* background pattern */}
       <div className='h-[700px] w-[700px] bg-primary absolute -top-1/2 right-0 rounded-3xl rotate-45
       -z-9'>
       
        {/* hero section */}
<div className='container pb-8 sm:pb-0'>
<div>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* text content section */}
        <div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
            <p className='text-sm'>{data.description}</p>
        </div>
        <div>
            <button className='bg-gradient-to-r from-primary to-secondary
            hover:scale-105 duration-200 text-red-50 py-2 px-4 rounded-full
            
            '>order now</button>
        </div>

    </div>
    {/* image section */}
    <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px]
    sm:w-[450px] sm:scale-125 object-contain mx-auto'/>
</div>
</div>
       </div>
    </div>
  )
}

export default Hero;
