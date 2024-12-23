import React from 'react'
import Img1 from "../../assets/test1.jpg";
import Img2 from "../../assets/test2.jpg";
import Img3 from "../../assets/test3.jpg";
import Img4 from "../../assets/test4.jpg";
import Img5 from "../../assets/test5.jpg";
import Img6 from "../../assets/test6.jpg";
import Img7 from "../../assets/test7.jpg";
import Slider from "react-slick"


const TestimonialData = [
    {
        id:1,
        name:"lolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",        
        img:Img1,

    },
    {
        id:2,
        name:"polyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",        
        img:Img2,

    },
    {
        id:3,
        name:"kolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",
        img:Img3,

    },
    {
        id:4,
        name:"rolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",
        img:Img4,

    },
    {
        id:5,
        name:"elolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",
        
        img:Img5,

    },
    {
        id:6,
        name:"wlolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",
        img:Img6,

    },
    {
        id:7,
        name:"dlolyyo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea expedita quam amet, magnam repellendus maiores obcaecati sapiente mollitia delectus itaque",
        
        img:Img7,

    },
    

];

const Testimonial = () => {
    var settings = {
        dots:true,
        arrows:true,
        infinite:true,
        speed:500,
        // slider show
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    }
  return (
    <div className='bg-amber-200 dark:bg-gray-700 dark:text-white py-8 my-2'>
        <div className="container">
            {/* text section */}
            <div className='py-4 text-center max-w-[600px] mx-auto'>
                 <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
                 <p data-aos="fade-up" className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quam.</p>
            </div>
            {/* testimonial section */}
            <div 
            data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map((data)=>(
                      
                         <div key={data.id} className='bg-white flex flex-col  shadow-lg py-8  px-6   my-10 rounded-xl'>
                                <div className='mb-4 '>
                                    <img src={data.img} alt=""
                                    className='rounded-full w-20 h-20 mx-auto' />
                                </div>
                                <div className='flex flex-col items-center gap-4 space-y-2'>
                                    
                                    <h1 className='text-xl  dark:text-black font-bold text-center'>{data.name}</h1>
                                    <p className='text-sm dark:text-black'>{data.description}</p>
                                    
                                </div>
                       </div>
                      
                    ))}

                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
