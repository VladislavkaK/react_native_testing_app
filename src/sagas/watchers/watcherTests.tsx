import { takeLatest } from 'redux-saga/effects';
import { workerTests } from '../workers/workerTestsSaga';

import * as types from '../../constants/ConstantsTests';

export default function* watchRating () {
    yield takeLatest(types.GET_TESTS_SUCCESS, workerTests);
}