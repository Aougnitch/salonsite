import './App.css'

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";


import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";
import headerBanner from "./assets/headerImage.jpg"




const NailSalon = () => {
  
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-white flex flex-col items-center ${menuOpen ? 'overflow-hidden' : ''}`}>
      {/* Navigation */}
      <nav className=" text-white p-4 w-full flex justify-between items-center relative">
        <img src="/src/assets/logo-placeholder.png" alt="Logo" className="h-10 ml-4" />
        <button 
          className="md:hidden text-pink-200 z-99 text-2xl mr-4" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

<ul className={`md:flex gap-6 text-lg font-bold absolute md:static bg-white md:bg-transparent top-0 left-0 w-full h-full md:w-auto md:h-auto md:flex-row flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-y-0 flex fixed bg-white w-screen h-screen z-98' : 'hidden md:flex'}`} style={{ zIndex: menuOpen ? 98 : 'auto' }}>
  <li>
    <Link 
      to="about" 
      smooth={true} 
      duration={500} 
      className="block p-4 text-pink-200 hover:text-light-pink-100 cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>
  </li>
  <li>
    <Link 
      to="work" 
      smooth={true} 
      duration={500} 
      className="block p-4 text-pink-200 hover:text-light-pink-100 cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      Our Work
    </Link>
  </li>
  <li>
    <Link 
      to="pricing" 
      smooth={true} 
      duration={500} 
      className="block p-4 text-pink-200 hover:text-light-pink-100 cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      Services
    </Link>
  </li>
  <li>
    <Link 
      to="contact" 
      smooth={true} 
      duration={500} 
      className="block p-4 text-pink-200 hover:text-light-pink-100 cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      Find Us
    </Link>
  </li>
</ul>

      </nav>

      <div className="w-full flex flex-col items-center max-w-screen">
        {/* About Section */}
        <section 
          id="about"
          className="w-full h-100 flex flex-col items-center justify-center p-8 text-center bg-light-pink-100 bg-cover bg-center"
          
        >
          <img src={headerBanner} alt="header banner" className="" />
            <h1 className='mb-4 font-bold text-pink-200 text-2xl'>Place holder company name</h1>
          
          <div className="flex flex-row gap-4">
            <button className=" text-pink-200 px-6 py-3 rounded-lg shadow-md hover:bg-coral-600 transition"
            onClick={() => navigate('/pricingPage')}
            // Link to another page
            >Services</button>
            <button className="bg-pink-200 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 transition">Book an Appointment</button>
          </div>
        </section>

        {/* Carousel Section */}
        <section id="work" className="p-8 text-center w-full">
          <h2 className="text-2xl font-bold mb-4 text-slate-600">Our Work</h2>
          <div className="flex justify-center">
            <Carousel showThumbs={false} autoPlay infiniteLoop className="w-full">
              <img src={slide1} alt="Nail Art 1" className="h-80 object-cover" />
              <img src={slide2} alt="Nail Art 2" className="h-80 object-cover" />
              <img src={slide3} alt="Nail Art 3" className="h-80 object-cover" />
              <img src={slide4} alt="Nail Art 4" className="h-80 object-cover" />
              <img src={slide5} alt="Nail Art 5" className="h-80 object-cover" />
            </Carousel>
          </div>
        </section>


        {/* Pricing Section */}
<section id="pricing" className="w-full px-6 h-70 mb-8 text-center bg-white">
  <h2 className="text-2xl font-bold mb-4 text-slate-600">Our Services</h2>
  <div className="grid h-50 grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { name: "Basic Manicure", price: "$20" },
      { name: "Gel Polish", price: "$35" },
      { name: "Luxury Spa", price: "$50" },
      { name: "Acrylic Nails", price: "$40" },
    ].map((service, index) => (
      <div key={index} className="bg-pink-200 flex justify-center flex-col shadow-md p-6 rounded-lg text-center">
        <h3 className="font-bold text-white ">{service.name}</h3>
        <p className="font-bold text-white">{service.price}</p>
      </div>
    ))}
  </div>
  {/* Centered Button */}
  <div className="mt-8">
    <button
      className="text-pink-200 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-coral-600 transition"
      onClick={() => window.location.href = '/pricingPage'} // Link to another page
    >
      All Services
    </button>
  </div>
</section>


        {/* Google Maps Section */}
        <section id="contact" className="p-8 mt-8 bg-light-pink-200 w-full">
          <h2 className="text-2xl font-bold mb-4 text-slate-600 text-center">Find Us</h2>
          <subcontainer className="w-full flex flex-row ">
            <subsection className="w-1/2">
              <h3 className='text-slate-600 font-bold flex justify-start' >You can contact us with any questions or queries <br />Address: Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
            </subsection>
            <subsection className="w-1/2">
              <iframe
                title="Google Maps"
                className="w-full max-w-3xl mx-auto h-64 border"
                src="https://www.google.com/maps/embed?"
                allowFullScreen
              ></iframe>
            </subsection>
          </subcontainer>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-600 text-white p-4 w-full h-50">
        <subcontainer className='flex flex-row items-center w-full h-full justify-center place-content-evenly'>

      

        <div className='w-1/3 h-1/2 flex flex-col items-center'>
            <h3>Address</h3>
            <p>123 Beauty Street, Nail City</p>
            <p>123 Beauty Street, Nail City</p>
            <p>123 Beauty Street, Nail City</p>
        </div>
        <div className='w-1/3 h-1/2 flex flex-col items-center'>
        <h3>Contact Us</h3>
            <p>+357xxxxxxxxx</p>
            <p>+357xxxxxxxxx</p>
            <p>+357xxxxxxxxx</p>
        </div>

      
        <div className="flex flex-col h-1/2 w-1/3 items-center">
        <h3>Follow us</h3>
        <div className='flex flex-row gap-4 mt-2'>
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
        </div>
          
        </div>

      </subcontainer>
    
      </footer>
    </div>
  );
};

export default NailSalon;
