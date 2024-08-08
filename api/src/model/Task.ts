import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../app/config/database';

interface ITask {
    id?: string;
    title: string;
    content: string;
    color: string;
    favorite: boolean;
}

class Task extends Model<ITask> {}

Task.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING(7),
            allowNull: false,
            defaultValue: '#ffffff',
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_tasks',
        sequelize: sequelizeConnection,
        underscored: true,
    },
);

export { Task };
