import axios from 'axios';
export function requestGetOrder(){
    return axios.request({
        method:'get',
        url:'https://dummyjson.com/products'
    })
}