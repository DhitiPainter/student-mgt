import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import alertReducer from './alert.reducer';
import coreReducer from './core.reducer';
import profileReducer from "./profile.reducer";
import userReducer from './user.reducer';

export const rootReducer = combineReducers({
    alertReducer,
    coreReducer,
    form: formReducer,
    profileReducer,
    userReducer
});
