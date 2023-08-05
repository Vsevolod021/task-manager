import workspaceAPIInterface from '../interfaces/userData.interface';
import { $authHost } from './index';

export const createWorkspace = async (
    theme: string,
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

export const changeWorkspace = async (
    theme: string,
    color: string,
    userId: number | null,
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
