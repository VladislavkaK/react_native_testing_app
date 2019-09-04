import * as types from '../../constants/ConstantsTests';
import { put, call } from 'redux-saga/effects';
import { getTestsAPI } from '../../services/testsService';

export function* workerTests (payload: any) {
    try {
        const response = yield call (getTestsAPI, payload);
        yield put ({ type: types.GET_TESTS_RECEIVED, response })
    } catch (error) {
        yield put ({ type: types.GET_TESTS_ERROR, error })
    }
}