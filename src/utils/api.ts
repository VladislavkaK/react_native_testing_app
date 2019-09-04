let API_MAP = null;
let IP = "";
const isLocal = window.location.host === "localhost:8081";

if (isLocal) {
    IP = "https://server-dragon.firebaseapp.com";
}

API_MAP = {
    GET_DATA_TESTS: `${IP}/api/v1/tests`,
    GET_DATA_TEST_QUESTIONS: `${IP}/api/v1/test/question`
}

export {
    API_MAP
};