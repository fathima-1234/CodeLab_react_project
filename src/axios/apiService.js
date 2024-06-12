import axios from 'axios';

const API_BASE_URL = 'https://accesslabbeta.stagingserverhub.com/api/b2b';

// export const apiLogin = (loginData) => {
//     return axios.post(`${API_BASE_URL}/login`, loginData, {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     });
// };
export const apiLogin = (loginData) => {
    const params = new URLSearchParams();
    for (const key in loginData) {
        params.append(key, loginData[key]);
    }
    return axios.post(`${API_BASE_URL}/login`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

export const fetchDoctors = () => {
    return axios.get(`${API_BASE_URL}/doctors`);
};

export const filterOrders = (filterData) => {
    return axios.get(`${API_BASE_URL}/filter/orders`, {
        params: filterData
    });
};


