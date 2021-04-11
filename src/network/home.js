import {axios1} from 'network/resquest.js'
export function homedata(){
    return axios1({
        url:'home/multidata'
    })
}