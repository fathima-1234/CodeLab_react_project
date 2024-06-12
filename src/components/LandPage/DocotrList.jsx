import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import { dummyDoctorData } from '../../dummyData';

const MainComponent = () => {
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

    return (
        <div className="container mx-auto  bg-customBackground">
            <h1 className="text-md mb-4">Popular Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentDoctors.map((doctor, index) => (
                    <div key={doctor.id} className="relative">
                        <DoctorCard doctor={doctor} />
                        {index === 3 && (
                            <div className="absolute top-0 right-0 mt-36 mr-2 flex flex-col space-y-2">
                                {/* <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded-md bg-gray-200"
                                >
                                    {'<'}
                                </button> */}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={indexOfLastDoctor >= doctors.length}
                                    className="px-3 py-1 rounded-md bg-white text-blue-500"
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

export default MainComponent;

