import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import alertReducer from './alert.reducer';
import coreReducer from './core.reducer';
import userReducer from './user.reducer';

export const rootReducer = combineReducers({
    alertReducer,
    coreReducer,
    form: formReducer,
    userReducer
});
