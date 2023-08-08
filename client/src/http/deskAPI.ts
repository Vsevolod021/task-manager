import workspaceAPIInterface from '../interfaces/userData.interface';
import { $authHost } from './index';

export const createDesk = async (name: string, userId: number) => {
    const { data } = await $authHost.post('api/desk/create', {
        name,
        userId,
    });
    return data;
};

export const getDesk = async (id: number) => {
    const { data } = await $authHost.get('api/desk/' + id);
    return data;
};

export const getAllDesk = async (userId: number) => {
    const { data } = await $authHost.get('api/desk/', { params: { userId } });
    return data;
};
