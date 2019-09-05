import * as typesTests from '../../constants/ConstantsTests';
import {
    GET_TESTS_SUCCESS,
    GET_TESTS_RECEIVED,
    GET_TESTS_ERROR
} from './reducerTests';

let initialState = {
    answers: []
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
            let result = action.answers;

            if (state.answers.length > 0) {
 
                for (let i = 0; i < state.answers.length; i++) {
                    let data = state.answers[i];

                    if (data.test_set_id == action.answers.test_set_id) {
                        console.log(2)
                        console.log(action.answers)
                        result = action.answers;
                    }

                    result = data;
                }
            }

            //     result = {
            //         ...state,
            //         answers: state.answers.map(data => {
            //             console.log(data.test_set_id, action.answers.test_set_id)
            //             if (data.test_set_id == action.answers.test_set_id) {
            //                 // console.log("data", data)
            //                 // console.log("answers", action.answers)
            //                 console.log(2)
            //                 return [...data, action.answers];
            //             }

            //             return data
            //         }
                        
            //         ) 
            //     };
            // }
                
                
            
            return { ...state, answers: [
                ...state.answers,
                result
            ] }
                      
        default:
            return state;
    }
}