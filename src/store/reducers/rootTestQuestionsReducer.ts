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
            let totalSuccessAnswers = []; // верных ответов за сет

            for (let key in data.questions) {
                if (data.questions[key].answer_success) {
                    totalSuccessAnswers.push({
                        answer_id: data.questions[key].answer_id,
                        answer_success: data.questions[key].answer_success
                    }); 
                }
            }

            return { ...state, totalSuccessAnswers }
            // return { ...state, data: [
            //     ...state.data,
            //     successAnswers
            // ] }           
        default:
            return state;
    }
}