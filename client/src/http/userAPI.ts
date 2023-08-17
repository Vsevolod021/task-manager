import { UserAPIInterface } from '../interfaces/userData.interface';
import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (
    name: string,
    email: string,
    password: string,
): Promise<UserAPIInterface> => {
    const { data } = await $host.post('api/user/registration', {
        name,
        email,
        password,
    });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (
    email: string,
    password: string,
): Promise<UserAPIInterface> => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const check = async (): Promise<UserAPIInterface> => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};
