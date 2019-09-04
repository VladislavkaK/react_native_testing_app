import axios from 'axios';
import { API_MAP } from '../utils/api';

export const getTestsAPI = () => {
    const GET_TEST = API_MAP.GET_DATA_TESTS;

    const headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    }

    return axios.get(GET_TEST, {headers:headers})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}