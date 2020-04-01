import { createStore, combineReducers } from "redux";

import mobileMenuReducer from "./reducers/mobileMenuReducer";

const rootReducer = combineReducers({
  menu: mobileMenuReducer
});

const store = createStore(rootReducer);

export default store;
