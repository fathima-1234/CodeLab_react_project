// import React, { useState, useEffect } from 'react';
// import DoctorCard from './DoctorCard';
// import { dummyDoctorData } from '../../dummyData';

// const MainComponent = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [doctorsPerPage] = useState(4);

//     useEffect(() => {
//         setDoctors(dummyDoctorData);
//     }, []);

//     // Get current doctors
//     const indexOfLastDoctor = currentPage * doctorsPerPage;
//     const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//     const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);

//     return (
//         <div className="container mx-auto  bg-customBackground">
//             <h1 className="text-md mb-4">Popular Packages</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {currentDoctors.map((doctor, index) => (
//                     <div key={doctor.id} className="relative">
//                         <DoctorCard doctor={doctor} />
//                         {index === 3 && (
//                             <div className="absolute top-0 right-0 mt-36 mr-2 flex flex-col space-y-2">
//                                 {/* <button
//                                     onClick={() => paginate(currentPage - 1)}
//                                     disabled={currentPage === 1}
//                                     className="px-3 py-1 rounded-md bg-gray-200"
//                                 >
//                                     {'<'}
//                                 </button> */}
//                                 <button
//                                     onClick={() => paginate(currentPage + 1)}
//                                     disabled={indexOfLastDoctor >= doctors.length}
//                                     className="px-3 py-1 rounded-md bg-blue-500 text-white"
//                                 >
//                                     {'>'}
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MainComponent;
import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import { dummyDoctorData } from '../../dummyData';

const MainComponent = () => {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [doctorsPerPage] = useState(4);

    const [filters, setFilters] = useState({
        name: '',
        specialization: '',
        address: ''
    });

    useEffect(() => {
        setDoctors(dummyDoctorData);
        setFilteredDoctors(dummyDoctorData);
    }, []);

    useEffect(() => {
        const filtered = doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            doctor.specialization.toLowerCase().includes(filters.specialization.toLowerCase()) &&
            doctor.address.toLowerCase().includes(filters.address.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [filters, doctors]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Get current doctors
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8 bg-customBackground">
            <h1 className="text-3xl text-md mb-4">Popular Packages</h1>

            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    placeholder="Filter by name"
                    className="mr-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="specialization"
                    value={filters.specialization}
                    onChange={handleFilterChange}
                    placeholder="Filter by specialization"
                    className="mr-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="address"
                    value={filters.address}
                    onChange={handleFilterChange}
                    placeholder="Filter by address"
                    className="p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentDoctors.map((doctor, index) => (
                    <div key={doctor.id} className="relative">
                        <DoctorCard doctor={doctor} />
                        {index === currentDoctors.length - 1 && (
                            <div className="absolute top-0 right-0 mt-2 mr-2 flex flex-col space-y-2">
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={indexOfLastDoctor >= filteredDoctors.length}
                                    className="px-3 py-1 rounded-md bg-gray-200"
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

