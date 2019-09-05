import * as types from '../../constants/ConstantsTestQuestions';
import { put, call } from 'redux-saga/effects';
import { getTestQuestionsAPI } from '../../services/testQuestionsService';

export function* workerTestQuestions (payload: any) {
    try {
        const response = yield call (getTestQuestionsAPI, payload);
        yield put ({ type: types.GET_TEST_QUESTIONS_RECEIVED, response })
    } catch (error) {
        yield put ({ type: types.GET_TEST_QUESTIONS_ERROR, error })
    }
}