function GET_TEST_QUESTIONS_SUCCESS (state: any, action: any) {
    return { ...state, isLoading: true }
}

function GET_TEST_QUESTIONS_RECEIVED (state: any, { response: { body: { testing }, head: { success } } }: any) {
    let isSuccess: boolean = false;

    if (success) {
        isSuccess = success
    }
    
    return {
        ...state,
        isSuccess,
        isLoading: false,
        testing
    }
}

function GET_TEST_QUESTIONS_ERROR (state: any, { error }: any) {
    return { ...state, error: error }
}

export {
    GET_TEST_QUESTIONS_SUCCESS,
    GET_TEST_QUESTIONS_RECEIVED,
    GET_TEST_QUESTIONS_ERROR
}