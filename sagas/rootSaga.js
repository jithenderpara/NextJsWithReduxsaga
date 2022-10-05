import {takeLatest} from 'redux-saga/effects';
import { handleGetOrders } from './handlers/orders';
import {GET_USER} from '../redux/orders'

export function* watcherSaga(){
yield takeLatest(GET_USER, handleGetOrders);
}