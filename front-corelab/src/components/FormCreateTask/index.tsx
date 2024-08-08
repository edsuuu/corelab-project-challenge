import React from 'react';

import { Container, InputContainer, StarIcon, TextareaInput, TextInput } from './styled';

const FormCreateTask: React.FC = () => {
    return (
        <Container>
            <form action="">
                <InputContainer>
                    <TextInput type="text" placeholder="Título" />
                    <StarIcon size={30} />
                </InputContainer>
                <TextareaInput placeholder="Criar nota..." />
                <button>Criar</button>
            </form>
        </Container>
    );
};

export default FormCreateTask;
