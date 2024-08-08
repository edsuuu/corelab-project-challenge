import React, { useEffect, useState } from 'react';
import { CardContainer, Container } from './styled';
import CardTarefa from '../../components/CardTarefa';
import API_URL from '../../services/axios';
import FormCreateTask from '../../components/FormCreateTask';

interface Task {
    id: string;
    title: string;
    content: string;
    favorite: boolean;
    color: string;
}

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function getAllTasks(): Promise<void> {
            try {
                const response = await API_URL.get('/tasks');
                setTasks(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getAllTasks();
    }, []);

    const favoriteTasks: Task[] = tasks.filter((task) => task.favorite);
    const otherTasks: Task[] = tasks.filter((task) => !task.favorite);

    return (
        <Container>
            <FormCreateTask />
            <div>
                <h1>Favoritas</h1>
                <CardContainer>
                    {favoriteTasks.map((task) => (
                        <CardTarefa key={task.id} title={task.title} content={task.content} />
                    ))}
                </CardContainer>
            </div>

            <div>
                <h1>Outras</h1>
                <CardContainer>
                    {otherTasks.map((task) => (
                        <CardTarefa key={task.id} title={task.title} content={task.content} />
                    ))}
                </CardContainer>
            </div>
        </Container>
    );
};

export default Home;
