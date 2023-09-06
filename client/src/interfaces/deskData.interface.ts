export interface DeskAPIInterface {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}

export interface TaskConditionAPIInterface {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deskId: number;
}

export interface WorkSprintAPIInterface {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deskId: number;
}

export interface TaskAPIInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    workSprintId: number;
    taskConditionId: number;
}

export interface TaskInfoAPIInterface {
    id: number;
    title: string;
    description: string;
    executor: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
    infoId: number;
    taskId: number;
}

export interface TaskFullInfoAPIInterface extends TaskAPIInterface {
    info: TaskAPIInterface;
}
