import React from 'react';
import Frame1 from '../../assests/images/Frame1.png'; // Import the image

const Frame = () => {
    return (
        <div>
            <hr className='pb-6' />
            < div className="bg-white pt -5py-8 px-4 md:px-8 lg:px-16" >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl text-center font-bold mb-4">Popular Test in your city</h2>
                    <div className="flex justify-center">
                        <img src={Frame1} alt="Popular Lab" className="w-full max-w-full pb-10" />
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Frame;

