import axios from "./axios";

export function predict(obj){
    return axios.post('/predict', obj)
}