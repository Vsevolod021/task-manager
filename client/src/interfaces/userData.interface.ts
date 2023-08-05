export default interface userAPIInterface {
    id: number;
    email: string;
    name: string;
    iat: number;
    exp: number;
}

export default interface workspaceAPIInterface {
    id: number;
    theme: 'light' | 'dark';
    color: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}
