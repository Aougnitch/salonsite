import './App.css'

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "./assets/logo-no-bg.png"
import { useNavigate } from "react-router-dom";



const TablePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <nav className="text-white p-2 w-full flex justify-between items-center fixed top-0 left-0 z-50 bg-white shadow-md">
              <img src={logo} alt="Logo" className="h-20" />
              <button 
                className="md:hidden text-backcolor z-99 text-2xl mr-4" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
      
               <ul className={`md:flex gap-6 text-lg font-bold absolute md:static bg-white md:bg-transparent top-0 left-0 w-full h-full md:w-auto md:h-auto md:flex-row flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-y-0 flex fixed bg-white w-screen h-screen z-98' : 'hidden md:flex'}`} style={{ zIndex: menuOpen ? 98 : 'auto' }}>
                {/* <li><Link to="about" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>About</Link></li> */}
                {/* <li><Link to="work" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" onClick={() => setMenuOpen(false)}>Our Work</Link></li> */}
                
                {/* Changed Services to use navigate */}
                <li>
                          <button 
                            onClick={() => {
                              setMenuOpen(false);
                              navigate('/');
                            }}
                            className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer bg-transparent"
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
                    className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer bg-transparent"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <a 
                    href="YOUR_BOOKING_URL_HERE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book Appointment
                  </a>
                </li>
                <li><Link to="contact" smooth={true} duration={500} className="block p-4 text-backcolor hover:text-light-pink-100 cursor-pointer" 
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/');

                }}
                
                >Contact Us</Link></li>


              </ul>

            </nav>
      <div className="w-full pt-24">
        

                

      </div>
    </div>
  );
};

export default TablePage;
