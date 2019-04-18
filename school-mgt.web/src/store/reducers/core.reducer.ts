import { coreConstants } from '../../common/constant';

const initialState = { roles: {}, sideBarPanel: [] };

export function core(state = initialState, action: any) {
    switch (action.type) {
        case coreConstants.getRoles:
            return {
                roles: action.data
            };
        case coreConstants.getSidebarPanel:
            return {
                sideBarPanel: action.data
            };
        default:
            return state;
    }
}

export default core;