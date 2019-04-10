import { alertConstants } from '../../common/constant';

export function alert(state = {}, action: any) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                message: action.message,
                type: 'alert-success'
            };
        case alertConstants.ERROR:
            return {
                message: action.message,
                type: 'alert-danger'
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}

export default alert;