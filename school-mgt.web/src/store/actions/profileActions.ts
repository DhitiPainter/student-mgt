import { profileConstants } from "./../../common/constant";
// import * as localStorageService from "./../../services/localstorage.service";
import * as userService from './../../services/user.service';
import * as alertActions from './alertActions';

// const user = localStorageService.getLocalStorageObject(LocalStorage.user);

export function getProfile(userId: any) {
    return async (dispatch: any) => {
        try {
            const profile = await userService.getProfile(userId);
            return (dispatch(event(profileConstants.getProfile, profile.data)));
        } catch (error) {
            return (dispatch(alertActions.error(error)));
        }
    }
}

export function updateProfile(user: any, userId: any) {
    return async (dispatch: any) => {
        try {
            const profile = await userService.updateProfile(user, userId);
            // profile.status.toString() === '200' ?
            //     dispatch(alertActions.success(profile.data.message)) : null;
            return (dispatch(event(profileConstants.getProfile, profile.data)));
        } catch (error) {
            return (dispatch(alertActions.error(error)));
        }
    }
}

function event(actionType: any, data: any) {
    return {
        data, type: actionType
    };
}

export const ProfileActions = { getProfile, updateProfile };