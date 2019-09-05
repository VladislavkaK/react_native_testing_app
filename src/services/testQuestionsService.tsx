import axios from 'axios';
import { API_MAP } from '../utils/api';

export const getTestQuestionsAPI = (request: any) => {
    const GET_TEST_QUESTIONS = API_MAP.GET_DATA_TEST_QUESTIONS;
    const id = request.id;

    const headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    }

    const config = {
        headers: headers,
        params: {
            id: id
        }
    }

    return axios.get(GET_TEST_QUESTIONS, config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}