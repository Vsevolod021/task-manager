import { WorkSprintAPIInterface } from '../interfaces/deskData.interface';
import { $authHost } from './index';

export const createSprint = async (
    name: string,
    startDate: Date,
    endDate: Date,
    deskId: number,
): Promise<WorkSprintAPIInterface> => {
    const { data } = await $authHost.post('api/sprint/create', {
        name,
        startDate,
        endDate,
        deskId,
    });

    return data;
};

export const getSprint = async (
    id: number,
): Promise<WorkSprintAPIInterface> => {
    const { data } = await $authHost.get('api/sprint/' + id);

    return data;
};

export const getAllSprints = async (
    deskId: number | null,
): Promise<WorkSprintAPIInterface[]> => {
    const { data } = await $authHost.get('api/sprint/', { params: { deskId } });

    return data;
};
