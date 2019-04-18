import { coreConstants, LocalStorage } from "./../../common/constant";
import * as coreService from "./../../services/core.service";
import * as localStorageService from "./../../services/localstorage.service";
import * as alertActions from "./alertActions";

const user = localStorageService.getLocalStorageObject(LocalStorage.user);

// Get user roles
export async function getRoles() {
    return async (dispatch: any) => {
        try {
            const roles = await coreService.getRoles()
            dispatch(event(coreConstants.getRoles, roles));
        } catch (error) {
            dispatch(alertActions.error(error));
        }
    }
}

// Get side-bar-panel based on logged-in user role
export function getSideBarPanel() {
    return async (dispatch: any) => {
        try {
            const sidebarPanel = await coreService.getSidebarPanel(user.role);
            dispatch(event(coreConstants.getSidebarPanel, sidebarPanel));
        } catch (error) {
            dispatch(alertActions.error(error));
        }
    }
}

function event(actionType: any, data: any) {
    return {
        data, type: actionType
    };
}

export const CoreActions = { getRoles, getSideBarPanel }