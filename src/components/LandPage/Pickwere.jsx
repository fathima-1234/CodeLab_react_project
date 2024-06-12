import React, { useState, useEffect } from 'react';
import { dummyDoctorData } from '../../dummyData';

const Pickwere = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [doctorsPerPage] = useState(4);

    useEffect(() => {
        setDoctors(dummyDoctorData);
    }, []);

    // Get current doctors
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
        );
    };

    return (
        <div className=" mx-auto  bg-customBackground">
            <h1 className=" text-md mb-4">Pick Were You Left Off</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentDoctors.map((doctor, index) => (
                    <div key={doctor.id} className="relative">
                        <DoctorCard doctor={doctor} />
                        {index === 3 && (
                            <div className="absolute top-0 right-0 mt-36 mr-2 flex flex-col space-y-2">
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={indexOfLastDoctor >= doctors.length}
                                    className="px-3 py-1 rounded-md bg-white"
                                >
                                    {'>'}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pickwere;
