import React from 'react'

import Image1 from "../../assets/mens-wear.jpg";
 import Image2 from "../../assets/women-wear.jpg";
 import Image3 from "../../assets/childreen-wear.jpg";
import Slider from "react-slick"

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
      title:"upto 30% off on al women wear",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim! Sunt, vero"
      
  },
  {
      id:3,
      img:Image3,
      title:"upto 30% off on al children wear",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim! Sunt, vero"
      
  },
 
]


const Heroo = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite:true,
    speed:800,
    slidesTopScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
     cssEase:"ease-in-out",
     pauseOnHover:false,
     pauseOnFocus:true,
  }
  
  return (
    <div className=' h-[80vh] items-center justify-center w-full bg-gray-100 dark:bg-slate-600 dark:text-white py-4'>
<Slider {...settings}>
{ImageList.map((data)=>(
  <div key={data.id}>

<div className='container  grid grid-cols-1 sm:grid-cols-2 '>
      {/* text section */}
      <div className='flex flex-col  gap-3  mx-auto pt-12 order-2 sm:order-1'>
        <h1 
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
        className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-red-800'>{data.title}</h1>
        <p 
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        
        className='text-3xl text-green-950 font-semibold max-w-sm'>{data.description}</p>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24 mx-auto sm:mx-0"
         
         onClick={handleOrderPopup}>
  order
</button>
        
        
      </div>
      {/* image section */}
      <div
       data-aos="zoom-in"
       data-aos-once="true"
      
       className='order-1 sm:order-2 pt-12'>
      <img src={data.img} alt="" className='w-[300px] h-[350px] mx-auto rounded-full '/>
       
      </div>
    </div>
  </div>
))}

    </Slider>
    </div>
  
)
}
export default Heroo
