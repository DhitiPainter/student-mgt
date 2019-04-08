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
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS'
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

