import { fork } from 'redux-saga/effects';
import watchTests from './watchers/watcherTests';
import watchTestQuestions from './watchers/watcherTestQuestions';

export default function* rootSaga() {
    yield fork(watchTests);
    yield fork(watchTestQuestions);
}