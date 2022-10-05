import {combineReducers, createStore, applyMiddleware} from 'redux';
import ordersReducer from './redux/orders';
// saga
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga';
const reducer = combineReducers({
    orders: ordersReducer
})
const sagaMiddleware= createSagaMiddleware();
const middleWare=[sagaMiddleware];
const store = createStore(reducer,{},applyMiddleware(...middleWare));
sagaMiddleware.run(watcherSaga);
export default store;