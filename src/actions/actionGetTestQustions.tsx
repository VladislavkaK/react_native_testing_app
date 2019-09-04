import * as types from '../constants/ConstantsTestQuestions';

export const getDataTestQuestions = (id: any) => {
    return {
        type: types.GET_TEST_QUESTIONS_SUCCESS,
        id
    }
}