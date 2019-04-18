import { toast } from "react-toastify";
import { alertConstants } from '../../common/constant';

export function alert(state = {}, action: any) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            toast.success(action.message);
        case alertConstants.ERROR:
            toast.error(action.message);
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}

export default alert;