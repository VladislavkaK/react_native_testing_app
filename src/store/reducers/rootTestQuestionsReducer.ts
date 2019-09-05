import * as typesTestQuestions from '../../constants/ConstantsTestQuestions';
import {
    GET_TEST_QUESTIONS_SUCCESS,
    GET_TEST_QUESTIONS_RECEIVED,
    GET_TEST_QUESTIONS_ERROR
} from './reducerTestQuestions';

const initialState = {
    data: []
};

export default function (state = initialState, action: any) {

    switch (action.type) {
        case typesTestQuestions.GET_TEST_QUESTIONS_SUCCESS:
            return GET_TEST_QUESTIONS_SUCCESS(state, action);
        case typesTestQuestions.GET_TEST_QUESTIONS_RECEIVED:
            return GET_TEST_QUESTIONS_RECEIVED(state, action);
        case typesTestQuestions.GET_TEST_QUESTIONS_ERROR:
            return GET_TEST_QUESTIONS_ERROR(state, action);
        case "ANSWERS_DATA_SUCCESS":
            const { data } = action;
            
            return { ...state, data: [
                ...state.data,
                data
            ] }           
        default:
            return state;
    }
}