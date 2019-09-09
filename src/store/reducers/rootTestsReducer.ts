import * as typesTests from '../../constants/ConstantsTests';
import {
    GET_TESTS_SUCCESS,
    GET_TESTS_RECEIVED,
    GET_TESTS_ERROR
} from './reducerTests';
	
import AsyncStorage from '@react-native-community/async-storage'

let initialState = {
    answersData: []
}

export default function (state = initialState, action: any) {

    switch (action.type) {
        case typesTests.GET_TESTS_SUCCESS:
            return GET_TESTS_SUCCESS(state, action);
        case typesTests.GET_TESTS_RECEIVED:
            return GET_TESTS_RECEIVED(state, action);
        case typesTests.GET_TESTS_ERROR:
            return GET_TESTS_ERROR(state, action);
        case "GET_TEST_ANSWERS_RESULT_SUCCESS": 
            const { successAnswers, test_set_id } = action.answers;
            let data: any = [];
            let newData: any = {}   

            for (let i = 0; i < successAnswers.length; i++) {
                const answer_id = successAnswers[i].answer_id;
                const answer_success = successAnswers[i].answer_success;

                data.push({ answer_id, answer_success })
            }

            newData[test_set_id] = data;

            return {
                ...state,
                answersData: newData,
            } 
        // case "UPDATE_RESULT_TEST":
  
        default:
            return state;
    }
}