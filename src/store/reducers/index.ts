import { combineReducers } from 'redux';
import tests from './rootTestsReducer';
import testQuestions from './rootTestQuestionsReducer';

const rootReducer = combineReducers({
    tests,
    testQuestions
})

export default rootReducer;