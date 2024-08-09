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
    updated_at: string;
}

interface HomeProps {
    pequisar: string;
}

const Home: React.FC<HomeProps> = ({ pequisar }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function getAllTasks(): Promise<void> {
            try {
                const response = await API_URL.get('/tasks');

                const ordemDeCriacao = response.data.reverse();

                setTasks(ordemDeCriacao);
            } catch (error) {
                console.log(error);
            }
        }

        getAllTasks();
    }, []);

    const cardsFiltrados = tasks.filter((task) => task.title.toLowerCase().includes(pequisar.toLowerCase()));

    const favoriteTasks: Task[] = cardsFiltrados.filter((task) => task.favorite);
    const otherTasks: Task[] = cardsFiltrados.filter((task) => !task.favorite);

    const handleDelete = async (id: string, index: number) => {
        try {
            await API_URL.delete(`/tasks/${id}`);
            const novasTask = [...tasks];
            novasTask.splice(index, 1);
            setTasks(novasTask);
        } catch (err) {
            console.log(err);

            if (err) {
                window.location.reload();
            }
        }
    };

    return (
        <Container>
            <FormCreateTask />
            <div>
                <h1>Favoritas</h1>
                <CardContainer>
                    {favoriteTasks.map((task, index) => (
                        <CardTarefa
                            key={task.id}
                            id={task.id}
                            titulo={task.title}
                            conteudo={task.content}
                            favoriteTask={task.favorite}
                            color={task.color}
                            updated_at={task.updated_at}
                            onClick={() => handleDelete(task.id, index)}
                        />
                    ))}
                </CardContainer>
            </div>

            <div>
                <h1>Outras</h1>
                <CardContainer>
                    {otherTasks.map((task, index) => (
                        <CardTarefa
                            key={task.id}
                            id={task.id}
                            titulo={task.title}
                            conteudo={task.content}
                            favoriteTask={task.favorite}
                            color={task.color}
                            updated_at={task.updated_at}
                            onClick={() => handleDelete(task.id, index)}
                        />
                    ))}
                </CardContainer>
            </div>
        </Container>
    );
};

export default Home;
