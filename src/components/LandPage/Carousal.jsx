import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero from '../../assests/images/hero.png'; // Correct path to assets
import { GoSearch } from "react-icons/go";
const Carousal = () => {
    return (
        <div className="relative bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
            <div className=" mx-auto">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    showStatus={false}
                    showArrows={false}
                    className="w-full" // Set the carousel width to full
                >
                    <div className="relative">
                        <img src={hero} alt="Slide 1" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-black bg-opacity-50 text-white p-10">
                            <h2 className="text-3xl font-bold mb-4">We have served more<br />than 7000+ customers</h2>
                            <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit mollis quisque senectus massa <br />lobortis,scelerisque maecenas sagittis faucibus <br />integer
                            </p>
                            <div className="flex items-center space-x-2 mb-4 w-full max-w-3xl"> {/* Set max-width for responsive layout */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Bangalore"
                                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    />

                                    <span className="absolute right-5 inset-y-0 flex items-center">
                                        <GoSearch className="text-gray-500" />
                                    </span>
                                </div>

                            </div>
                            <p className="text-sm">We are associated with more than 25+ labs.</p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <img src={hero} alt="Slide 2" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-black bg-opacity-50 text-white p-10">
                            <h2 className="text-3xl font-bold mb-4">We have served more<br />than 7000+ customers</h2>
                            <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit mollis quisque senectus massa <br />lobortis,scelerisque maecenas sagittis faucibus <br />integer
                            </p>
                            <div className="flex items-center space-x-2 mb-4 w-full max-w-3xl"> {/* Set max-width for responsive layout */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search for a test..."
                                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    />
                                    <span className="absolute right-5 inset-y-0 flex items-center">
                                        <GoSearch className="text-gray-500" />
                                    </span>
                                </div>

                            </div>
                            <p className="text-sm">We are associated with more than 25+ labs.</p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <img src={hero} alt="Slide 3" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-black bg-opacity-50 text-white p-10">
                            <h2 className="text-3xl font-bold mb-4">We have served more<br />than 7000+ customers</h2>
                            <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit mollis quisque senectus massa<br /> lobortis,scelerisque maecenas sagittis faucibus <br />integer
                            </p>
                            <div className="flex items-center space-x-2 mb-4 w-full max-w-3xl"> {/* Set max-width for responsive layout */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search for a test..."
                                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    />
                                    <span className="absolute right-5 inset-y-0 flex items-center">
                                        <GoSearch className="text-gray-500" />
                                    </span>
                                </div>

                            </div>
                            <p className="text-sm">We are associated with more than 25+ labs.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Carousal;
