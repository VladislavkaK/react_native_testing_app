import * as types from '../constants/ConstantsTestQuestions';

export const getDataTestQuestions = (id: any) => {
    return {
        type: types.GET_TEST_QUESTIONS_SUCCESS,
        id
    }
}

export const answersData = (data: any) => {
    return {
        type: "ANSWERS_DATA_SUCCESS",
        data
    }
}