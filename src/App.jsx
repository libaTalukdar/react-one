import React from 'react'
import Navbar from './components/navbar/Navbar';
import Heroo from './components/Hero/Heroo';
import Products from './components/products/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './components/topProducts/TopProducts';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import PopUp from './components/popUp/PopUp';

const App = () => {
  const [orderPopup,setOrderPopup] = React.useState(false);
  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div className=' '>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Heroo handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
       <Subscribe/> 
       <Testimonial/>
       <Footer/>
        <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    
    </div>
  )
}

export default App

