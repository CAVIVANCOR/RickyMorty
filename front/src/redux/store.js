import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducer";
const { createStore, applyMiddleware } = require("redux");

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
