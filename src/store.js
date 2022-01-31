import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducers from "./Reducers/index";
import rootSaga from "./Sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducers
);
sagaMiddleware.run(rootSaga);
export default store;
