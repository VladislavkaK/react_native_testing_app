let API_MAP: any = null;
let IP = "https://server-dragon.firebaseapp.com";

API_MAP = {
    GET_DATA_TESTS: `${IP}/api/v1/tests`,
    GET_DATA_TEST_QUESTIONS: `${IP}/api/v1/test/question`
}

export {
    API_MAP
};