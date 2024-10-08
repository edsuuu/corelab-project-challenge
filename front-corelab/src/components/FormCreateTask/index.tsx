/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { Container, InputContainer, TextareaInput, TextInput } from './styled';

import API_URL from '../../services/axios';
import IconStars from '../../assets/IconStars';
import { toast } from 'react-toastify';

const FormCreateTask: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [favorite, setFavorite] = useState<boolean>(false);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleFavoriteChange = () => {
        setFavorite(!favorite);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        let erros = false;

        if (!title) {
            erros = true;
            toast.error('Titulo não pode ficar vazio.', { theme: 'colored' });
        }

        if (!content) {
            erros = true;
            toast.error('Conteudo da tarefa não pode ficar vazio.', { theme: 'colored' });
        }

        if (erros) return;

        console.log(title, content, favorite);

        try {
            const criarCard = await API_URL.post('/tasks', { title, content, favorite });

            console.log(criarCard);

            setTitle('');
            setContent('');
            setFavorite(false);
            toast.success('Tarefa criada.', { theme: 'colored' });

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <form method="post" onSubmit={handleSubmit}>
                <InputContainer>
                    <TextInput type="text" placeholder="Título" onChange={(e) => handleTitleChange(e)} />
                    <IconStars active={favorite} onClick={handleFavoriteChange} />
                </InputContainer>
                <TextareaInput placeholder="Criar nota..." onChange={(e) => handleContentChange(e)} />
                <button>Criar</button>
            </form>
        </Container>
    );
};

export default FormCreateTask;
