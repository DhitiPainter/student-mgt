import { toast } from "react-toastify";
import { userActionConstants } from "./../../common/constant";

const u = localStorage.getItem('user');
const user = u ? JSON.parse(u) : null;
const initialState = user ? { loggedIn: true, user } : {};

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
                loggedIn: true,
                user: action.data.user
            };
        case userActionConstants.LOGIN_FAILURE:
            toast.error("Invalid credentials")
            return {};
        // Registeration reducers        
        case userActionConstants.REGISTER_REQUEST:
            return {
                registering: true,
                user: action.data
            };
        case userActionConstants.REGISTER_SUCCESS:
            toast.success(action.data)
            return {};
        case userActionConstants.LOGIN_FAILURE:
            toast.error(action.data)
            return {};
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

export default authentication;
