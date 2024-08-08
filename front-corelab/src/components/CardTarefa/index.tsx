import React from 'react';
import { Container, Conteudo, Rodape, Titulo } from './styled';
import { RiStarSLine } from 'react-icons/ri';

interface CardTarefaProps {
    title: string;
    content: string;
}

const CardTarefa: React.FC<CardTarefaProps> = ({ title, content }) => {
    return (
        <Container>
            <Titulo>
                <h2>{title} </h2>
                <RiStarSLine />
            </Titulo>
            <Conteudo>
                <p>{content}</p>
            </Conteudo>
            <Rodape>
                <div>
                    <button>Editar</button>
                    <button>Trocar cor</button>
                </div>
                <div>
                    <button>Excluir</button>
                </div>
            </Rodape>
        </Container>
    );
};

export default CardTarefa;
