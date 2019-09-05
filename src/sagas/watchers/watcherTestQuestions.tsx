import { takeLatest } from 'redux-saga/effects';
import { workerTestQuestions } from '../workers/workerTestQuestionsSaga';

import * as types from '../../constants/ConstantsTestQuestions';

export default function* watchRating () {
    yield takeLatest(types.GET_TEST_QUESTIONS_SUCCESS, workerTestQuestions);
}