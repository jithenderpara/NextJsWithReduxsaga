import {call, put} from 'redux-saga/effects';
import { requestGetOrder } from '../request/orders';
import {setUser} from '../../redux/orders'
export function* handleGetOrders(action){
    try{
        const response= yield call(requestGetOrder);
        const {data}= response;
        yield put(setUser(data));
    }
    catch(error){
        console.log(error)
    }
}