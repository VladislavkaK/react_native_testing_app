import * as typesTests from '../../constants/ConstantsTests';
import * as typesTestQuestions from '../../constants/ConstantsTestQuestions';
import {
    GET_TESTS_SUCCESS,
    GET_TESTS_RECEIVED,
    GET_TESTS_ERROR
} from './reducerTests';

export default function (state = [], action: any) {
    switch (action.type) {
        case typesTests.GET_TESTS_SUCCESS:
            return GET_TESTS_SUCCESS(state, action);
        case typesTests.GET_TESTS_RECEIVED:
            return GET_TESTS_RECEIVED(state, action);
        case typesTests.GET_TESTS_ERROR:
            return GET_TESTS_ERROR(state, action);        
        default:
            return state;
    }
}