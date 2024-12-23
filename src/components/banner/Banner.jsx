import React from 'react'
import bannerImg from "../../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className='  bg-slate-200 my-4'>
      <div className="container py-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* image section */}
              <div data-aos="zoom-in">
                <img src={bannerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto
                drop-shadow-xl object-cover'/>
              </div>
              {/* text section */}
              <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-3xl sm:text-5xl font-bold'>
                  Summer Sale Upto 50% Off
                </h1>
                <p className=' text-3xl leading-7 tracking-wide text-justify' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt saepe neque fugiat tenetur 
                  tempore quod ullam sit modi quidem exercitationem?</p>
                 <div className='flex flex-col space-y-3'>
                 <div data-aos="fade-up" className='flex items-center gap-4'>
                     <GrSecure className='text-2xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-500
                     dark:bg-slate-50 dark:text-black'/>
                     <p>Quality Product</p>
                  </div>
                  <div data-aos="fade-up" className='flex items-center gap-4' >
                  <IoFastFood  className='text-2xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-500
                     dark:bg-slate-50 dark:text-black'/> 
                  <p>Fast delivery</p>   
                  </div>
                 </div>
              </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
