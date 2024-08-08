import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelizeConnection from './app/config/database';

dotenv.config();

const whitelist = ['http://127.0.0.1:5173', 'http://localhost:5173'];

const corsOptions: cors.CorsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin as string) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

class App {
    public app: Express;

    constructor() {
        this.connectionDatabase();
        this.app = express();
        this.middlewares();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    async connectionDatabase() {
        try {
            await sequelizeConnection.authenticate();
            console.log('[server]: Connection database success');
        } catch (err) {
            console.error('[server]: Error connecting database', err);
        }
    }
}

export default new App().app;
