import * as types from '../constants/ConstantsTests';

export const getDataTest = () => {
    return {
        type: types.GET_TESTS_SUCCESS
    }
}

export const getResultTest = (answers: any) => {

    return {
        type: "GET_TEST_ANSWERS_RESULT_SUCCESS",
        answers
    }
}

export const updateResultTest = (data: any) => {

    return {
        type: "UPDATE_RESULT_TEST",
        data
    }
}