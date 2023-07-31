import { DataTypes } from 'sequelize';

import sequelize from '../db.js';

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, defaultValue: 'mysterious dino' },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
});

const Workspace = sequelize.define('workspace', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    theme: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
});

const Desk = sequelize.define('desk', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const WorkSprint = sequelize.define('work_sprint', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE },
});

const TaskCondition = sequelize.define('task_condition', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const Task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const TaskInfo = sequelize.define('task_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    executor: { type: DataTypes.STRING },
    priority: { type: DataTypes.STRING },
});

User.hasMany(Desk);
Desk.belongsTo(User);

User.hasOne(Workspace);
Workspace.belongsTo(User);

Desk.hasMany(WorkSprint);
WorkSprint.belongsTo(Desk);

Desk.hasMany(TaskCondition);
TaskCondition.belongsTo(Desk);

WorkSprint.hasMany(Task);
Task.belongsTo(WorkSprint);

TaskCondition.hasMany(Task);
Task.belongsTo(TaskCondition);

Task.hasOne(TaskInfo, { as: 'info' });
TaskInfo.belongsTo(Task);

export default { User, Desk, WorkSprint, TaskCondition, Task, TaskInfo, Workspace };
export { User, Desk, WorkSprint, TaskCondition, Task, TaskInfo, Workspace };
