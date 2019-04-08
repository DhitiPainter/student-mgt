import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";

// generate logs
const loggerMiddleware = createLogger({
    predicate: (getState, action) => !action.type.includes('@@redux-form')
})

// Generate store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;