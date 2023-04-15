import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import issuesReducer from "./issues_reducer";
import repoDataReducer from "./repoData_reducer";

let reducers = combineReducers({
  issuesData: issuesReducer,
  repoData: repoDataReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
