export default interface userAPIInterface {
    id: number;
    email: string;
    name: string;
    iat: number;
    exp: number;
}

export default interface workspaceAPIInterface {
    id: number;
    theme: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}
