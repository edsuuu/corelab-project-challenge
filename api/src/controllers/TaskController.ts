import { Request, Response } from 'express';
import { PayloadReceived } from '../interfaces/PayloadReceived';
import { Task } from '../model/Task';

class TaskController {
    async createTask(req: Request, res: Response) {
        // eslint-disable-next-line prefer-const
        let { title, content, favorite, color }: PayloadReceived = req.body;

        if (!color) {
            color = '#ffffff';
        }

        const obj = { title, content, favorite, color };

        const data = await Task.create(obj);

        const destruct = data.toJSON();

        const task = { ...destruct, created_at: undefined, updated_at: undefined };

        res.status(201).json({ status: 201, msg: 'Tarefa criada com Sucesso', task });
    }

    async getAllTasks(req: Request, res: Response) {
        const data = await Task.findAll();

        res.status(201).json(data);
    }

    async getOneTask(req: Request, res: Response) {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        res.status(200).json(task);
    }

    async updateOneTask(req: Request, res: Response) {
        const { id } = req.params;
        const { title, content, favorite, color }: Partial<PayloadReceived> = req.body;

        const task = await Task.findByPk(id);

        if (!task || task === null) {
            return res.status(404).json({ msg: 'Essa tarefa não existe' });
        }

        await task.update({ title, content, favorite, color });

        res.status(200).json({ msg: 'Tarefa atualizada com sucesso', task });
    }

    async deleteOneTask(req: Request, res: Response) {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        if (!task || task === null) {
            return res.status(404).json({ msg: 'Essa tarefa não existe' });
        }

        await task.destroy();

        res.status(200).json({ msg: 'Tarefa apagada.' });
    }
}

export default new TaskController();
