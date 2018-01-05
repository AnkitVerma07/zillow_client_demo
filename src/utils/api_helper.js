

import axios from 'axios';
import {host} from '../config/api_config'
export const getUserLoggedIn = () => {
    return {
        endpoint: '/api/users/find/me',
        method: 'GET',
        auth: true,
    };
};

export const getAllPeople = async (sortField,ascending) => {
    const response = await axios.get(host+'/api/people?sortField='+sortField+'&ascending='+ascending)
        .catch(function (error) {
            alert(error);
        });
    return response;
};
