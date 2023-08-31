export interface DeskAPIInterface {
    id: number;
    name: string;
    access: string;
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
