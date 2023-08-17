export interface UserAPIInterface {
    id: number;
    email: string;
    name: string;
    iat: number;
    exp: number;
}

export interface WorkspaceAPIInterface {
    id: number;
    theme: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}
