import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';

// Combine all reducers
const rootReducer = combineReducers({
    form: formReducer
})

// Generate store
const store = createStore(rootReducer);

export default store;