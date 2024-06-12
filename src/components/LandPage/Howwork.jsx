import React from 'react';
import Frame3 from '../../assests/images/Frame3.png'; // Import the image

const Howwork = () => {
    return (
        <div className="bg-customBackgroundA py-8  px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl  text-center text-textColor font-bold mb-4">How We Work</h2>
                <div className="flex justify-center">
                    <img src={Frame3} alt="Popular Lab" className="w-full max-w-1284px h-280px" />
                </div>
            </div>
        </div>
    );
};

export default Howwork;

