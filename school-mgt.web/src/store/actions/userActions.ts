import * as authService from '../../services/auth.service';
import { LocalStorage, userActionConstants as userConstants } from "./../../common/constant";
import * as localStorageService from "./../../services/localstorage.service";
import * as alertActions from './alertActions';

export function login(user: any) {
    // tslint:disable-next-line: no-console
    console.log("user login", user);
    return (dispatch: any) => {
        dispatch(request(userConstants.LOGIN_REQUEST, user))

        authService.authenticate(user)
            .then((res: any) => {
                // Set token and userData in storage
                // tslint:disable-next-line: no-unused-expression
                res.user ? localStorageService.setLocalStorageObject(LocalStorage.user, res.user) : null;
                // tslint:disable-next-line: no-unused-expression
                res.token ? localStorageService.setLocalStorageObject(LocalStorage.token, res.token) : null;
                localStorageService.setLocalStorageObject(LocalStorage.isAuthenticated, res.isAuthenticated);
                if (res.isAuthenticated) {
                    dispatch(success(userConstants.LOGIN_SUCCESS, res))
                } else {
                    dispatch(success(userConstants.LOGIN_FAILURE, res.message))
                }
            }, (error: any) => {
                dispatch(failure(userConstants.LOGIN_FAILURE, error));
                dispatch(alertActions.error(error));
            })

    }
}

function request(actionType: any, data: any) {
    return {
        data, type: actionType
    };
}
function success(actionType: any, data: any) {
    return {
        data, type: actionType
    };
}
function failure(actionType: any, error: any) {
    return {
        error, type: actionType
    };
}

export const UserActions = { login };