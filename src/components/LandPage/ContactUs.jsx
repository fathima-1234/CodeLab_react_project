import React from 'react';
import Vector5 from '../../assests/images/Vector5.png'; // Correct path to assets
import Vector6 from '../../assests/images/Vector6.png'; // Correct path to assets
import Vector7 from '../../assests/images/Vector7.png'; // Correct path to assets

const ContactUs = () => {
    return (
        <div className="relative bg-customBackgroundA  py-8 px-4 md:px-8 lg:px-16 flex items-center justify-center">
            {/* Vector images */}
            <img
                src={Vector5}
                alt="Vector 5"
                className="absolute right-5 bottom-0   opacity-80 w-60 h-50"
                style={{
                    mixBlendMode: 'multiply',

                }}
            />
            <img
                src={Vector6}
                alt="Vector 6"
                className="absolute top-5 left-20 transform -translate-x-1/2 opacity-80 w-12 h-12"
                style={{
                    mixBlendMode: 'multiply',

                }}
            />
            <img
                src={Vector7}
                alt="Vector 7"
                className="absolute bottom-5 left-40 opacity-80 w-24 h-24"
                style={{
                    mixBlendMode: 'multiply',

                }}
            />

            {/* Main content */}
            <div className="text-center max-w-lg  p-8 rounded-lg relative z-10 opacity-80"
            >
                <h2 className="text-3xl font-bold mb-4">Feel free to contact us</h2>
                <p className="text-base mb-8">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer
                </p>
                <button className="bg-textColor text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                    Contact us
                </button>
            </div>
        </div >
    );
};

export default ContactUs;

