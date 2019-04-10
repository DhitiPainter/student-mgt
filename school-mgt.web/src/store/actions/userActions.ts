import * as authService from '../../services/auth.service';
import { LocalStorage, userActionConstants as userConstants } from "./../../common/constant";
import * as localStorageService from "./../../services/localstorage.service";
import * as alertActions from './alertActions';

export function login(user: any) {
    return (dispatch: any) => {
        dispatch(event(userConstants.LOGIN_REQUEST, user))

        authService.authenticate(user)
            .then((res: any) => {
                const userData = res.data;
                // Set token and userData in storage
                // tslint:disable-next-line: no-unused-expression
                userData.user ? localStorageService.setLocalStorageObject(LocalStorage.user, userData.user) : null;
                // tslint:disable-next-line: no-unused-expression
                userData.token ? localStorageService.setLocalStorageObject(LocalStorage.token, userData.token) : null;
                localStorageService.setLocalStorageObject(LocalStorage.isAuthenticated, userData.isAuthenticated);
                if (userData.isAuthenticated) {
                    dispatch(event(userConstants.LOGIN_SUCCESS, userData))
                } else {
                    dispatch(event(userConstants.LOGIN_FAILURE, userData.message))
                }
            }, (error: any) => {
                dispatch(failure(userConstants.LOGIN_FAILURE, error));
                dispatch(alertActions.error(error));
            })

    }
}

export function register(user: any) {
    return (dispatch: any) => {
        dispatch(event(userConstants.REGISTER_REQUEST, user))
        authService.registerUser(user)
            .then((res: any) => {
                dispatch(event(userConstants.REGISTER_SUCCESS, res.data.message))
            }, error => {
                dispatch(failure(userConstants.REGISTER_FAILURE, error));
                dispatch(alertActions.error(error));
            })
    }
}

export function logout() {
    return (dispatch: any) => {
        localStorageService.clearLocalStorage();
        dispatch(event(userConstants.LOGOUT, "Logged out successfully"));
    }
}

function event(actionType: any, data: any) {
    return {
        data, type: actionType
    };
}

function failure(actionType: any, error: any) {
    return {
        error, type: actionType
    };
}

export const UserActions = { login, register };