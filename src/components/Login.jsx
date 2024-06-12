import React, { useState } from 'react';
import { apiLogin } from '../axios/apiService';
import Group from '../assests/images/Group.png';
import Background from '../assests/images/Background.png';
import Vector5 from '../assests/images/Vector5.png';
import Vector6 from '../assests/images/Vector6.png';
import Vector7 from '../assests/images/Vector7.png';

const Login = ({ setToken }) => {
    const [credentials, setCredentials] = useState({
        client_id: 'ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa',
        client_secret: 'Yjq2KXplGi6Niarcp1gn6PP7OrMDlP',
        user_name: 'aswini@b2b.com',
        password: '123',
        grant_type: 'client_credentials',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await apiLogin(credentials);
            console.log('Login response:', response);

            if (response.data.status === 'nok') {
                setError(response.data.error.message);
            } else if (response.data.result && response.data.result.data) {
                setToken(response.data.result.data.token);
            } else {
                setError('Invalid login response');
            }
        } catch (error) {
            console.error("Login error:", error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div
            className="h-screen flex items-center justify-center font-serif relative"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >




            <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-5" style={{ width: '480px', height: '550px' }}>
                <img src={Vector7} alt="Vector7" className="absolute" style={{ width: '30px' }} />
                <div className="flex items-center justify-center mb-4 pt-4">
                    <img src={Group} alt="logo" className="w-48 h-auto" />
                </div>
                <h4 className='text-textColor text-center text-sm'>Report Download Portal</h4>
                <img src={Vector7} alt="Vector5" className="absolute" style={{
                    width: '60px', height: '60px', left: '800px', top: '94px'
                }} />
                <div className="bg-loginColor p-6 m-8 rounded-lg shadow-md">
                    < h4 className='text-textColor pt-2 text-center text-sm mb-1'>Login</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <label className="block text-sm text-gray-800 font-bold">Username</label>
                            <input
                                name="user_name"
                                type="text"
                                value={credentials.user_name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm text-gray-800 font-bold">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs ">{error}</p>}
                        <div className='flex justify-center pt-1'>
                            <button
                                type="submit"
                                className="bg-textColor text-white rounded-sm px-6 py-1 font-serif focus:outline-none focus:shadow-outline"
                            >
                                SUBMIT
                            </button>
                        </div>
                        <div className='text-center pt-4 text-xm'><a className="text-gray-800 text-sm" href="#">Reset Password</a></div>
                    </form>
                </div>
                <img src={Vector6} alt="Vector6" className="absolute" style={{ width: '90px', height: '90px' }} />
                <h5 className='text-textColor text-center pt-4 text-md font-bold mb-10'>(+91) 9288008801</h5>
                <h5 className='text-center text-xs mb-2'>I hereby agree and accept the <span className='text-textColor'>Terms of service</span> and <span className='text-textColor'>Privacy policy</span></h5>
            </div>
        </div >
    );
};

export default Login;
