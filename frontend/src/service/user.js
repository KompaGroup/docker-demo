import { instance } from '../util/request';

export const listUser = () => {
    return instance.get('/user');
}

export const createUser = ({ name, address, age }) => {
    return instance.post('/user', { name, address, age });
}