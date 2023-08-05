import workspaceAPIInterface from '../interfaces/userData.interface';
import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const create = async (
    theme: 'light' | 'dark',
    color: string,
    userId: number,
): Promise<workspaceAPIInterface> => {
    const { data } = await $authHost.post('api/workspace/create', {
        theme,
        color,
        userId,
    });
    return data;
};

export const change = async (
    theme: 'light' | 'dark',
    color: string,
    userId: number,
): Promise<workspaceAPIInterface> => {
    const { data } = await $authHost.post('api/workspace/change', {
        theme,
        color,
        userId,
    });
    return data;
};

export const getWorkspace = async (
    userId: number,
): Promise<workspaceAPIInterface> => {
    const { data } = await $authHost.get('api/workspace/get/' + userId);
    return data;
};
