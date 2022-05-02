import { createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";

const initialState = {};
const store = createStore(rootReducer, initialState);

export default store;
