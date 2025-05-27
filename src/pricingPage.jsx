import './App.css';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo-no-bg.png';
import lazer from './assets/lazer-1.jpg'
import treatment from './assets/treatment.mp4'

import treatment2 from './assets/slideshow2.mp4'
import treatment3 from './assets/slideshow3.mp4'

import { FaFacebook, FaInstagram } from 'react-icons/fa';



const TablePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="text-white p-2 w-full flex justify-between items-center sticky top-0 left-0 z-50 bg-white shadow-md max-h-30">
              <img src={logo} alt="Logo" className="h-40 " />
              <button 
                className="md:hidden text-gray-800 z-99 text-2xl mr-4" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
      
              <ul className={`md:flex gap-6 text-lg font-bold absolute md:static bg-white md:bg-transparent top-0 left-0 w-full h-full md:w-auto md:h-auto md:flex-row flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-y-0 flex fixed bg-white w-screen h-screen z-98' : 'hidden md:flex'}`} style={{ zIndex: menuOpen ? 98 : 'auto' }}>
                              {/* <li><Link to="about" smooth={true} duration={500} className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer" onClick={() => setMenuOpen(false)}>About</Link></li> */}
                              {/* <li><Link to="work" smooth={true} duration={500} className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer" onClick={() => setMenuOpen(false)}>Our Work</Link></li> */}
                              
                              {/* Changed Services to use navigate */}
                              <li>
                                <button 
                                  onClick={() => {
                                    setMenuOpen(false);
                                    navigate('/');
                                  }}
                                  className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer bg-transparent"
                                >
                                  Home
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => {
                                    setMenuOpen(false);
                                    navigate('/pricingPage');
                                  }}
                                  className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer bg-transparent"
                                >
                                  Services
                                </button>
                              </li> 
                              
                              {/* New "Book Appointment" link */}
                              <li>
                                <a 
                                  href="YOUR_BOOKING_URL_HERE" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  Book Appointment
                                </a>
                              </li>
      
                              <li><Link to="contact" smooth={true} duration={500} className="block p-4 text-gray-800 hover:text-backcolor cursor-pointer" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                              
                             
                              
                            </ul>
            </nav>

      {/* HERO SECTION */}
      <section className="w-full bg-backcolor py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Smooth Confidence Starts Here</h1>
        <p className="text-lg md:text-xl mb-6">Experience state-of-the-art laser hair removal and premium grooming services</p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Book Your Session
        </button>
      </section>

      {/* LASER MACHINE SECTION */}
      <section className="w-full max-w-6xl px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <img src={lazer} alt="Laser Machine" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Advanced Laser Technology</h2>
          <p className="text-gray-700 mb-4">
            We use the industry-leading <strong>Diode IceCool™</strong> laser system, offering safe, painless, and highly effective treatments for all skin types.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast treatment time</li>
            <li>Minimal discomfort</li>
            <li>Suitable for men and women</li>
            <li>Certified professionals</li>
          </ul>
        </div>
      </section>

      {/* NAIL SALON SERVICES */}
      <section className="bg-white w-full max-w-6xl px-4 py-12 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Manicure & Pedicure Lounge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Classic Mani-Pedi</h3>
            <p>Includes shaping, buffing, polish, and massage – ideal for weekly maintenance.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Gel Polish</h3>
            <p>Chip-resistant, long-lasting shine for up to 2 weeks. Perfect for busy lifestyles.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Nail Art & Custom Designs</h3>
            <p>Creative expression with rhinestones, patterns, and colors of your choice.</p>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
<section className="max-w-7xl px-6 py-16 mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 font-cormorant tracking-wide">
    Watch Our Treatments in Action
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
      <video
        src={treatment}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
      <video
        src={treatment2}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
      <video
        src={treatment3}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
</section>

 {/* Footer */}
<footer className="bg-backcolor text-white p-4 w-full h-50 mt-12">
  <div className='flex flex-row items-center w-full h-full justify-center place-content-evenly text-xs sm:text-xl'>
    <div className='w-1/3 h-1/2 flex flex-col items-center'>
      <h3 className='pb-2'>Address</h3>
      <a className='text-center'>
        Archiepiskopou Makariou III 7, Yeroskipou 8200, Cyprus
      </a>
    </div>
    <div className='w-1/3 h-1/2 flex flex-col items-center'>
      <h3 className='pb-2'>Contact Us</h3>
      <a href="tel:+35770070003">70070003</a>
    </div>
    <div className="flex flex-col h-1/2 w-1/3 items-center">
      <h3 className='pb-2'>Follow us</h3>
      <div className='flex flex-col sm:flex-row gap-4'>
        <a href="https://www.facebook.com/p/Nova-Laser-and-Beauty-61569373780388/?locale=it_IT" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={25} />
        </a>
        <a href='https://www.instagram.com/novalaserbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  </div>
</footer>

      
    </div>
  );
};

export default TablePage;

     {/* FORM SECTION */}
      {/* <section className="bg-white w-full max-w-4xl px-6 py-10 mb-16 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Consultation</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Service Interested In</label>
            <select className="w-full p-3 border border-gray-300 rounded">
              <option value="">Select one</option>
              <option value="laser">Laser Hair Removal</option>
              <option value="mani">Manicure / Pedicure</option>
              <option value="grooming">Other Grooming Services</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            Submit Request
          </button>
        </form>
      </section> */}

