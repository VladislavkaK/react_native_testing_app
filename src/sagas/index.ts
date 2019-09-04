import { fork } from 'redux-saga/effects';
import watchTests from './watchers/watcherTests';

export default function* rootSaga() {
    yield fork(watchTests);
}