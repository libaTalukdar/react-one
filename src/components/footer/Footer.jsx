import React from 'react'
import footerBanner from "../../assets/footer.jpg";
import footerLogo from "../../assets/logo.jpg";
const BannerImg = {
    backgroundImage:`url(${footerBanner})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};
const FooterLinks = [
    {  
        title:"Home",
        link:"/#,"

    },
    {   
        title:"About",
        link:"/#about",
    },
    {       
        title:"Contact",
        link:"/#contact",
    },

    {   
        title:"Blog",
        link:"/#blog",
    },


]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white  my-10'>
        <div className='container'>
      <div className='grid md:grid-cols-3 pt-5'>
        {/* company details */}
        <div className='py-8 px-4'>
            <h1 className='font-bold text-2xl sm:text-3xl flex gap-2 py-3 items-center'>
                <img src={footerLogo} alt="" className='w-16 h-16 border rounded-full'/>Bag shop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque labore autem quia fugiat sit.</p>
        </div>
        {/* link details */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
          <div>
            <div className='py-8 px-4'>
                <h1 className='font-bold text-3xl underline  mb-3'>
                    Links
                </h1>
                <ul className='flex flex-col gap-3'>{
                    FooterLinks.map((link)=>(
                        <li key={link.title} className='cursor-pointer hover:underline hover:text-yellow-950 '>
                         <span>{link.title}</span>
                        </li>
                    ))

                    }

                </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
