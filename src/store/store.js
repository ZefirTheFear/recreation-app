import { createStore, combineReducers } from "redux";

import mobileMenuReducer from "./reducers/mobileMenuReducer";
import headerReducer from "./reducers/headerReducer";

const rootReducer = combineReducers({
  menu: mobileMenuReducer,
  header: headerReducer
});

const store = createStore(rootReducer);

export default store;
