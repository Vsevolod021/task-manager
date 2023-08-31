import { DeskAPIInterface } from '../interfaces/deskData.interface';
import { $authHost } from './index';

import { createTaskCondition } from './taskConditionAPI';

export const createDesk = async (
    name: string,
    access: string,
    userId: number | null,
    taskConditions: string[],
): Promise<DeskAPIInterface> => {
    const { data } = await $authHost.post('api/desk/create', {
        name,
        access,
        userId,
    });

    taskConditions.forEach((name) => createTaskCondition(name, data.id));

    return data;
};

export const getDesk = async (id: number): Promise<DeskAPIInterface> => {
    const { data } = await $authHost.get('api/desk/' + id);
    return data;
};

export const getAllDesks = async (
    userId: number | null,
): Promise<DeskAPIInterface[]> => {
    const { data } = await $authHost.get('api/desk/', { params: { userId } });
    return data;
};
