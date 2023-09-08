import { DeskAPIInterface } from '../interfaces/deskData.interface';
import { $authHost } from './index';

import { createTaskCondition } from './taskConditionAPI';
import { createSprint } from './workSprintAPI';

export const createDesk = async (
    name: string,
    userId: number | null,
    taskConditions: string[],
    startDate: Date,
    endDate: Date,
): Promise<DeskAPIInterface> => {
    const { data } = await $authHost.post('api/desk/create', {
        name,
        userId,
    });

    taskConditions.forEach((name) => createTaskCondition(name, data.id));

    createSprint('sprint №1', startDate, endDate, data.id);

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
