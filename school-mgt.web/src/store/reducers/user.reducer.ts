import { toast } from "react-toastify";
import { userActionConstants } from "./../../common/constant";
import { LocalStorage } from "./../../common/constant";
import * as localStorageService from "./../../services/localstorage.service";

const user = localStorageService.getLocalStorageObject(LocalStorage.user) ? localStorageService.getLocalStorageObject(LocalStorage.user) : null;
const isAuthenticated = localStorageService.getLocalStorageString(LocalStorage.user) ? true : false;
const initialState = isAuthenticated ? { loggedIn: true, user, isAuthenticated } : {};

export const authentication = (state = initialState, action: any) => {
    switch (action.type) {
        case userActionConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.data
            };
        case userActionConstants.LOGIN_SUCCESS:
            toast.success("Logged in successfully");
            return {
                isAuthenticated: true,
                user: action.data.user
            };
        case userActionConstants.LOGIN_FAILURE:
            toast.error("Invalid credentials")
            return { isAuthenticated: false };
        // Registeration reducers        
        case userActionConstants.REGISTER_REQUEST:
            return {
                registering: true,
                user: action.data
            };
        case userActionConstants.REGISTER_SUCCESS:
            toast.success(action.data)
            return {
                isRegistered: true
            };
        case userActionConstants.REGISTER_FAILURE:
            toast.error(action.data)
            return {
                isRegistered: false
            };
        case userActionConstants.LOGOUT:
            toast.success(action.data)
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

export default authentication;
