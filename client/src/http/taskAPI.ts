import {
    TaskAPIInterface,
    TaskInfoAPIInterface,
    TaskExtendedAPIInterface,
} from '../interfaces/deskData.interface';

import { $authHost } from './index';

export const createTask = async (
    title: string,
    sprintId: number,
    conditionId: number,
): Promise<TaskAPIInterface> => {
    const { data } = await $authHost.post('api/task/create', {
        title,
        sprintId,
        conditionId,
    });

    return data;
};

export const changeTaskCondition = async (
    id: number,
    conditionId: number,
): Promise<TaskAPIInterface> => {
    const { data } = await $authHost.post('api/task/change-condition', {
        id,
        conditionId,
    });

    return data;
};

export const changeTaskInfo = async (
    title: string,
    description: string,
    executor: string,
    priority: string,
    taskId: number,
): Promise<TaskInfoAPIInterface> => {
    const { data } = await $authHost.post('api/task/change-info', {
        title,
        description,
        executor,
        priority,
        taskId,
    });

    return data;
};

export const fetchOneTask = async (
    id: number,
): Promise<TaskExtendedAPIInterface> => {
    const { data } = await $authHost.get('api/task/' + id);

    return data;
};

export const fetchAllTasks = async (
    workSprintId: number | null,
    taskConditionId: number | null,
): Promise<TaskExtendedAPIInterface[]> => {
    const { data } = await $authHost.get('api/task/', {
        params: { workSprintId, taskConditionId },
    });

    return data;
};
