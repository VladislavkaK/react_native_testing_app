import { combineReducers } from 'redux';
import tests from './rootTestsReducer';
import testQuestions from './rootTestQuestionsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    tests,
    testQuestions,
    form: formReducer
})

export default rootReducer;