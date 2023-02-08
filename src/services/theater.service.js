import httpClient from'../http-common';

const getAll = () => {
    return httpClient.get('/theaters');
}

const create = (data) => {
    return httpClient.post('/theaters', data);
}

const get = id => {
    return httpClient.get(`/theaters/${id}`);
}

const update = (data) => {
    return httpClient.put('/theaters', data);
}

const remove = id => {
    return httpClient.delete(`/theaters/${id}`);
}

const theaterService = {getAll, create, get, update, remove}
export default theaterService; 