// API constants
//#region
export const StudentMgtApi = "http://localhost:4000/";

export const Auth = {
    login: StudentMgtApi + 'auth/authenticate',
    register: StudentMgtApi + 'auth/register'
}
//#endregion

// ACTION constants
//#region
export const userActionConstants = {
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    REGISTER_ERROR: 'USER_REGISTER_ERROR',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS'
}

export const alertConstants = {
    CLEAR: 'CLEAR',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
}
//#endregion

export const LocalStorage = {
    isAuthenticated: 'isAuthenticated',
    token: 'token',
    user: 'userData'
}

