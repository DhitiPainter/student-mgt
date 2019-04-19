import { profileConstants } from '../../common/constant';

const initialState = { userDetails: {} };

export function core(state: any = initialState, action: any) {
    switch (action.type) {
        case profileConstants.getProfile:
            return {
                userDetails: action.data
            };
        case profileConstants.updateProfile:
            return {
                userDetails: action.data
            };
        default:
            return state;
    }
}

export default core;