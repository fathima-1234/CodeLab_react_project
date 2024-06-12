import React from 'react';

const DoctorCard = ({ doctor }) => {
    const services = doctor.services && doctor.services.length > 0 ? doctor.services[0] : null;

    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
            <div className="md:flex">
                <div className="">
                    <div className="flex justify-between">
                        <div>
                            <div className="uppercase tracking-wide text-md text-black font-bold">{doctor.name}</div>
                            <div className="mt-2 text-gray-600 text-lg">{doctor.address}</div>
                        </div>
                        <div className="flex items-center"> {/* Add flex to align button */}
                            <div className="px-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"> {/* Adjust padding and font size */}
                                4.3*
                            </div>
                        </div>
                    </div>
                    <hr />
                    {services && (
                        <>
                            <div className="mt-4 text-lg text-black font-bold">{services.name}</div>
                            {services.tests && services.tests.length > 0 && (
                                <ul className=" mt-4 ml-6">
                                    {services.tests.map((test, index) => (
                                        <li key={index} className="text-gray-600">{test}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="mt-4 text-lg font-bold">{services.price}</div>
                        </>
                    )}

                    <div className="flex justify-between items-center">
                        <div>
                            <div className="px-2 bg-green-300 text-white border-dashed border-green-800 text-sm font-semibold rounded-sm hover:bg-green-600 focus:outline-none focus:bg-green-600">{doctor.discount}</div>

                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-md text-textColor">{doctor.expectedReportTime}</div>

                            <div className="mb-4">
                                <button className="px-4 py-2 bg-textColor text-white font-semibold rounded-md hover:bg-blue focus:outline-none focus:bg-blue">
                                    Book
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard;
