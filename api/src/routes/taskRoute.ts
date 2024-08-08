import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskRoute = Router();

taskRoute.post('/', TaskController.createTask);

taskRoute.get('/', TaskController.getAllTasks);

taskRoute.get('/:id', TaskController.getOneTask);

taskRoute.put('/:id', TaskController.updateOneTask);

taskRoute.delete('/:id', TaskController.deleteOneTask);

export { taskRoute };
