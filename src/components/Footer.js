import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Make sure Link is imported

const Footer = () => {        
    return (
        <section 
        className="py-10 text-white sm:pt-16 lg:pt-24" 
        style={{ 
            backgroundImage: "url('/img/textures/oriental-texture.png')",
        }}
    >
    
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link to="/" className="flex items-center gap-2">
                <img className="w-39 h-28" src="/favicon.ico" alt="logo" />
                <span
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: '#111827',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >Hotel Celebrations Pride 
              </span>
            </Link>

                <p className="text-base leading-relaxed text-gray-800 mt-7">Hotel Celebrations Pride is celebrated for its modern amenities and personalized service, 
                establishing it as one of the finest hotels in Gandhi Path West, Vaishali Nagar committed to 
                setting higher benchmarks in the hospitality industry.</p>

            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-black uppercase">Quick Links</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <Link to="/" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Home </Link>
                    </li>

                    <li>
                        <Link to="/rooms" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Rooms </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Contact </Link>
                    </li>

                    <li>
                        <Link to="/banquet" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Hall </Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-black uppercase">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <Link to="/TnC" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Terms And Conditions </Link>
                    </li>
                    <li>
                        <Link to="/PrivacyPolicy" className="flex text-base text-black transition-all duration-200 hover:text-orange-400 focus:text-orange"> Privacy Policy </Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-black uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" className="mt-6">
                    <div>
                        <label for="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 rounded-md"
                        style={{ backgroundColor: "#fd9c0b" }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#e88c09")} 
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#fd9c0b")}
                    >
                    Subscribe
                    </button>
                </form>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p
            className="text-sm text-center"
            style={{
                color: "#ff5700",
                fontSize: "15px",
                fontFamily: "'DM Serif Text', serif",
                fontWeight: 400,
                fontStyle: "regular"
            }}
        >
        © All Rights Reserved. Developed by Liege Developers™.
        </p>

    </div>
    </section>
    )
}

export default Footer;