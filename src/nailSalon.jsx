import './App.css'

import React, { useState, useEffect, useRef } from "react";
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
import headerBanner from "./assets/header-image.png";

import { Card, card1, card2, card3, card4 } from "./cards";


const RevealSection = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

const NailSalon = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-white flex flex-col items-center ${menuOpen ? 'overflow-hidden' : ''}`}>
      {/* Navigation */}
      <nav className="text-white p-2 w-full flex justify-between items-center fixed top-0 left-0 z-50 bg-white shadow-md">
        <img src="/src/assets/logo-no-bg.png" alt="Logo" className="h-20" />
        <button 
          className="md:hidden text-backcolor z-99 text-2xl mr-4" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`md:flex gap-6 text-lg font-bold absolute md:static bg-white md:bg-transparent top-0 left-0 w-full h-full md:w-auto md:h-auto md:flex-row flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-y-0 flex fixed bg-white w-screen h-screen z-98' : 'hidden md:flex'}`} style={{ zIndex: menuOpen ? 98 : 'auto' }}>
          <li><Link to="about" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="work" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>Our Work</Link></li>
          <li><Link to="pricing" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>Find Us</Link></li>
        </ul>
      </nav>

      <div className="w-full flex flex-col items-center pt-40 md:pt-24 ">
        {/* About Section */}
        <RevealSection>
          <section 
            id="about"
            className="h-full w-full md:h-full flex flex-col md:flex-row items-center justify-center p-8 text-center bg-cover bg-center relative mb-4 sm:mb-8"
          >
            <div className="absolute inset-0 md:hidden flex justify-center place-items-center">
              <img src={headerBanner} alt="Banner Background" className="md:w-full md:h-full object-cover" />
            </div>

            <div className="flex flex-col justify-center place-items-center md:w-1/2 h-full gap-4 z-10">
              <div className='flex flex-col h-full justify-center place-items-center'>
                <img src="/src/assets/logo-no-bg.png" alt="Logo"/>
                <div className="flex flex-row gap-4 justify-center place-items-center">
                  <button className="text-backcolor px-6 py-3 rounded-lg shadow-md bg-green-50 hover:bg-backcolor hover:text-white transition md:text-xl h-full" onClick={() => navigate('/pricingPage')}>Services</button>
                  <button className="bg-backcolor text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-900 transition md:text-xl">Book Appointment</button>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 h-full hidden md:flex justify-center items-center">
              <img src={headerBanner} alt="Banner" className="h-full w-auto object-contain" />
            </div>
          </section>
        </RevealSection>

        {/* Carousel Section */}
        <RevealSection>
          <section id="work" className=" sm:mb-8 text-center w-full h-full">
           
            <div className="flex flex-row place-content-evenly w-full h-full">
              <div className='text-center w-1/3 flex place-items-center justify-center'>
                <h3 className='text-backcolor md:text-3xl text-md' >Our Gallery</h3>
              </div>
              
              <Carousel showThumbs={false} autoPlay infiniteLoop className="w-1/2 h-full">
                <img src={slide1} alt="Nail Art 1" className="h-150 object-fill rounded-xl" />
                <img src={slide2} alt="Nail Art 2" className="h-150 object-fill rounded-xl" />
                <img src={slide3} alt="Nail Art 3" className="h-150 object-fill rounded-xl" />
                <img src={slide4} alt="Nail Art 4" className="h-150 object-fill rounded-xl" />
                <img src={slide5} alt="Nail Art 5" className="h-150 object-fill rounded-xl" />
              </Carousel>
            </div>
          </section>
        </RevealSection>

        {/* Pricing Section */}
        
          <section id="pricing" className="w-full px-6 h-full sm:mb-8 text-center ">
            <h2 className="text-2xl sm:text-3xl mb-6 mt-6 text-backcolor">Our Services</h2>
            <div className="grid max-h-full w-full grid-cols-2 lg:grid-cols-4 gap-6  justify-center">
            <Card image={card1} title="Card One" description="Description for card one." />
            <Card image={card2} title="Card Two" description="Description for card two." />
            <Card image={card3} title="Card Three" description="Description for card three." />
            <Card image={card4} title="Card Four" description="Description for card four." />
            </div>
            <div className="mt-8 justify-center">
              <button
                className="text-white bg-backcolor px-6 py-3 rounded-lg shadow-md hover:bg-green-900 transition"
                onClick={() => window.location.href = '/pricingPage'}
              >
                All Services
              </button>
            </div>
          </section>
        

        {/* Google Maps Section */}
      
          <section id="contact" className="p-8  mb-4 sm:mb-8 bg-light-pink-200 w-full">
            <h2 className="text-2xl sm:text-3xl  mb-6 mt-6 text-backcolor text-center">Find Us</h2>
            <subcontainer className="w-full flex flex-row ">
              <subsection className="w-1/2 flex flex-col justify-center place-content-start">
                <h3 className='text-backcolor md:text-3xl text-md'>You can contact us with any questions or queries</h3>
                <br />
                <h3 className='text-backcolor md:text-3xl text-md'><a href="tel:+35770070003">+357 70070003</a></h3>
              </subsection>
              <subsection className="w-1/2">
                <iframe
                  title="Google Maps"
                  className="w-full max-w-3xl mx-auto h-70 border"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.28424026967!2d32.448306099999996!3d34.763902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e705000f2ed3cf%3A0x7b19f202d4ed8d35!2sNOVA%20LASER%20%26%20BEAUTY%20CLINIC!5e1!3m2!1sen!2sae!4v1744131935116!5m2!1sen!2sae"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>



              </subsection>
            </subcontainer>
          </section>
       
      </div>

      {/* Footer */}
      <footer className="bg-backcolor text-white p-4 w-full h-50">
        <subcontainer className='flex flex-row items-center w-full h-full justify-center place-content-evenly text-xs sm:text-xl'>
        <div className='w-1/3 h-1/2 flex flex-col items-center'>
            <h3 className='pb-2'>Address</h3>
            <a>QC7X+H86, <br/>Yeroskipou 8200, Cyprus</a>
            
        </div>
        <div className='w-1/3 h-1/2 flex flex-col items-center'>
        <h3 className='pb-2' >Contact Us</h3>
        <a href="tel:+35770070003">+357 70070003</a>
        </div>
        <div className="flex flex-col h-1/2 w-1/3 items-center">
        <h3 className='pb-2'>Follow us</h3>
        <div className='flex flex-col sm:flex-row gap-4'>
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaTwitter size={25} />
        </div>
        </div>
      </subcontainer>
      </footer>
    </div>
  );
};

export default NailSalon;