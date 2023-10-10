import { TaskConditionAPIInterface } from '../interfaces/deskData.interface';
import { $authHost } from './index';

export const createTaskCondition = async (
    name: string,
    deskId: number | null,
): Promise<TaskConditionAPIInterface> => {
    const { data } = await $authHost.post('api/condition/create', {
        name,
        deskId,
    });
    return data;
};

export const getTaskCondition = async (
    id: number,
): Promise<TaskConditionAPIInterface> => {
    const { data } = await $authHost.get('api/condition/' + id);
    return data;
};

export const getTaskConditions = async (
    deskId: number | null,
): Promise<TaskConditionAPIInterface[]> => {
    const { data } = await $authHost.get('api/condition/', {
        params: { deskId },
    });
    return data;
};

export const deleteCondition = async (
    id: number | null,
): Promise<TaskConditionAPIInterface> => {
    const { data } = await $authHost.post('api/condition/delete', {
        id,
    });

    return data;
};
