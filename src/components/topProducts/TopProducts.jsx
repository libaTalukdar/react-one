import React from 'react'
import Img1 from "../../assets/shirt1.jpg";
import Img2 from "../../assets/shirt2.jpg";
import Img3 from "../../assets/shirt3.jpg";
import Img4 from "../../assets/shirt4.jpg";
import Img5 from "../../assets/shirt5.jpg";
import Img6 from "../../assets/shirt6.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"men normal",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id:2,
        img:Img2,
        title:"men casual",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id:3,
        img:Img3,
        title:"colorful shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id:4,
        img:Img4,
        title:"printed shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id:5,
        img:Img5,
        title:"cauzy shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id:6,
        img:Img6,
        title:"men abnormal",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing."
    },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
   <div className='bg-yellow-100 py-6'>
     <div className='container '>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-2xl text-teal-950 dark:text-white'>Best selling Products</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'> Awsome product</h1>
            <p  data-aos="fade-up" className='text-2xl text-yellow-800 dark:text-white'>Lorem ipsum dolor  adipisicing elit. Velit, odio.</p>
        </div>
      {/* body section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-24 place-items-center gap-5'>
        {
            ProductsData.map((data)=>(
                <div key={data.id} 
                data-aos="zoom-in"
                 className='rounded-2xl bg-yellow-200 dark:bg-gray-400 hover:bg-orange-400 dark:hover:bg-neutral-600 hover:text-white relative shadow-xl my-14 duration-200 group max-w-[300px]' >
                    <div className='h-[100px]'>
                        <img src={data.img} alt="" className='max-w-[180px] h-[150px] block mx-auto  rounded-3xl  transform -translate-y-20 shadow-lg
                         group-hover:scale-105 duration-300' />
                    </div>
                    {/* details section */}
                    <div className='p-4 text-center'>
                  {/* star rating */}
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar  className='text-violet-500'/>
                    <FaStar  className='text-violet-500'/>
                    <FaStar  className='text-violet-500'/>
                    <FaStar  className='text-violet-500'/>
                  </div>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p className='text-gray-700 group-hover:text-red-950 line-clamp-2'>
                    {data.description}
                  </p>
                  <button
                  onClick={handleOrderPopup} 
                   className='bg-emerald-500 text-rose-950  group-hover:bg-red-200  group-hover:text-blue-950 py-1 px-4 rounded-xl my-2
                  '>
                    order now
                  </button >
                    </div>
                </div>


            ))
        }
      </div>
    </div>
   </div>
  )
}

export default TopProducts
