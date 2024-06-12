import React from 'react';
import Frame from '../../assests/images/Frame.png'; // Import the image

const PopularLabSection = () => {
    return (
        <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">Popular Lab in your city</h2>
                <div className="flex justify-center">
                    <img src={Frame} alt="Popular Lab" className="w-full max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default PopularLabSection;

