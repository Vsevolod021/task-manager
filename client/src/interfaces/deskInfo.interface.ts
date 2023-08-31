export default interface IDeskInfo {
    id: number;
    name: string;
    color: string;
    conditions?: ConditionsInfo;
}

interface ConditionsInfo {
    toDo: TaskInfo[];
    inProcess: TaskInfo[];
    done: TaskInfo[];
}

interface TaskInfo {
    name: string;
}
