import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_DATABASENAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbPort) {
    throw new Error('Está faltando uma ou mais variaveis de ambiente para o banco de dados');
}

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: parseInt(dbPort, 10),
    dialect: 'postgres',
    logging: console.log,

    define: {
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
});

export default sequelizeConnection;
