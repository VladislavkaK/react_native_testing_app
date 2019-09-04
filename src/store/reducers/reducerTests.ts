function GET_TESTS_SUCCESS (state: any, action: any) {
    return { ...state, isLoading: true }
}

function GET_TESTS_RECEIVED (state: any, { response: { body: { total_questions, tests }, head: { success } } }: any) {
    let isSuccess: boolean = false;

    if (success) {
        isSuccess = success
    }

    return {
        ...state,
        isSuccess,
        isLoading: false,
        total_questions,
        tests
    }
}

function GET_TESTS_ERROR (state: any, { error }: any) {
    return { ...state, error: error }
}

export {
    GET_TESTS_SUCCESS,
    GET_TESTS_RECEIVED,
    GET_TESTS_ERROR
}