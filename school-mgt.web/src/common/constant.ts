// API constants
//#region
export const StudentMgtApi = "http://localhost:4000/";

const auth = 'auth/';
const api = 'api/';

export const Auth = {
    login: StudentMgtApi + auth + 'authenticate',
    register: StudentMgtApi + auth + 'register'
}

export const User = {
    updateUserProfile: StudentMgtApi + api + 'updateUserDetails/{id}'
}

export const Core = {
    getRoles: StudentMgtApi + api + 'roles',
    getSidebarPanel: StudentMgtApi + api + 'sidebarPanel'
}
//#endregion

// ACTION constants
//#region
export const userActionConstants = {
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGOUT: 'USER_LOGOUT',
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

export const coreConstants = {
    getRoles: 'GET_ROLES',
    getSidebarPanel: 'GET_SIDEBAR_PANEL'
}

export const profileConstants = {
    getProfile: 'GET_PROFILE',
    updateProfile: 'UPDATE_PROFILE'
}
//#endregion

export const LocalStorage = {
    isAuthenticated: 'isAuthenticated',
    token: 'token',
    user: 'userData'
}

export const PieChartColorConfig = {
    datasets: [
        {
            backgroundColor: [
                "#1dc1ed",
                "#00ce98",
                "#cdba03"
            ],
            hoverBackgroundColor: [
                "#127894",
                "#00a275",
                "#c2b000"
            ]
        }],
}