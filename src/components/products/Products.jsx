import React from 'react'
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.jpg";
import Img6 from "../../assets/img6.jpg";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpg";
import Img9 from "../../assets/img9.jpg";
import Img10 from "../../assets/img10.jpg";
import { FaStar } from "react-icons/fa";

const productsData = [
    {
        id:1,
        img:Img1,
        title:"women normal",
        rating:5,
        author:"white",
        aosdelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"women normal",
        rating:4,
        author:"black",
        aosdelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"women abnormal",
        rating:5,
        author:"gray",
        aosdelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"women cute",
        rating:5,
        author:"sky",
        aosdelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"women normal",
        rating:5,
        author:"white",
        aosdelay:"800"
    },
    {
        id:6,
        img:Img6,
        title:"women gorgius",
        rating:5,
        author:"red",
        aosdelay:"1000"
    },
    {
        id:7,
        img:Img7,
        title:"women faboulous",
        rating:5,
        author:"violet",
        aosdelay:"1200"
    },
    {
        id:8,
        img:Img8,
        title:"women nice",
        rating:5,
        author:"teal",
        aosdelay:"1400"
    },
    {
        id:9,
        img:Img9,
        title:"women pretty",
        rating:5,
        author:"yellow",
        aosdelay:"1600"
    },
    {
        id:10,
        img:Img10,
        title:"women western",
        rating:5,
        author:"green",
        aosdelay:"1800"
    },

]



const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-teal-100 dark:bg-gray-600 dark:text-white py-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-2xl text-teal-950 dark:text-white'>top selling Products</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>product</h1>
            <p  data-aos="fade-up" className='text-2xl text-yellow-800 dark:text-white'>Lorem ipsum dolor  adipisicing elit. Velit, odio.</p>
        </div>
        {/* body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* card section */}
                {
                productsData.map((data)=>(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosdelay}
                    key={data.id} className='space-y-3'>
                    <img src={data.img} alt="" className=' h-[400px] w-[400px] sm:h-[220px] sm:w-[150px] rounded-md'/>
                    
                    <div>
                        <h3 className='text-2xl'>{data.title}</h3>
                        <p className='text-sm text-gray-800'>{data.color}</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-green-950'/>
                            <span>{data.rating}</span>
                        </div>
                    </div>
                    </div>
                ))}

            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
