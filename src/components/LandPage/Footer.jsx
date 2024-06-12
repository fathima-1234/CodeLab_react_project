import React from 'react';
import logo from '../../assests/images/logo.png';

const Footer = () => {
    return (
        <div>

            <footer className="bg-white py-8">
                <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-start"> {/* Add items-start for vertical alignment */}
                    {/* Logo */}
                    <div className="w-full md:w-auto mb-8 sm:mb-0 md:mr-12 lg:mr-80"> {/* Increase right margin for more space */}
                        <img src={logo} alt="Logo" className="w-32 h-auto" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Cities */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg text-textColor font-bold mb-4">Cities</h4>
                            <ul className='text-black'>
                                <li>Bangalore</li>
                                <li>Delhi</li>
                                <li>Noida</li>
                                <li>Hyderabad</li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg text-textColor font-bold mb-4">Support</h4>
                            <ul className='text-black'>
                                <li>Getting started</li>
                                <li>Help center</li>
                                <li>Report a bug</li>
                                <li>Refund policy</li>
                            </ul>
                        </div>
                        {/* Contact us */}
                        <div className="lg:col-span-1 md:text-left">
                            <h4 className="text-lg text-textColor font-bold mb-4">Contact us</h4>
                            <p className='text-black'>info@accesslabz.com</p>
                            <p className='text-black'>(+91) 9288008801</p>
                            <p className='text-black'>Door No. 28/69/1, Patturaikkal,<br />Thrissur, Kerala 680008, India</p>
                        </div>
                    </div>
                </div>
            </footer >





            <hr />
            <div className="w-full md:w-auto pt-5 mt-8 md:mt-0 flex justify-between">
                <p className="text-lg mb-4">Copyright © 2022 Access labz</p>
                <span className="text-textColor">All Rights Reserved | Terms and Conditions | Privacy Policy</span>
            </div>

        </div >
    );
};

export default Footer;
