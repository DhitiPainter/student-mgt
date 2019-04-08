const u = localStorage.getItem('user');
const user = u ? JSON.parse(u) : null;
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {};
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

export default authentication;
