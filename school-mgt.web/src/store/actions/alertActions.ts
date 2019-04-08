import { alertConstants } from "./../../common/constant";

export function success(message: any) {
    return { type: alertConstants.SUCCESS, message };
}

export function error(message: any) {
    return { type: alertConstants.ERROR, message };
}

export function clear() {
    return { type: alertConstants.CLEAR };
}
