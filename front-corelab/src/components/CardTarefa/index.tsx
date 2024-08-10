import React, { useState } from 'react';
import {
    Container,
    Conteudo,
    DataDeCriacao,
    Input,
    Rodape,
    Textarea,
    TitlePoup,
    BoxContent,
    BoxEdit,
    Titulo,
    Button,
    CoresDoCard,
    TrocarDeCor,
    CircleColor,
} from './styled';

import API_URL from '../../services/axios';
import IconColor from '../../assets/IconColor';
import IconStars from '../../assets/IconStars';
import IconEdit from '../../assets/IconEdit';
import IconClose from '../../assets/IconClose';
import { convertData } from '../../utils/ConvertData';
import { toast } from 'react-toastify';

interface CardTarefaProps {
    id: string;
    titulo: string;
    conteudo: string;
    favoriteTask: boolean;
    color: string;
    updated_at: string;
    onClick: () => void;
}

type Cor = {
    corHexadecimal: string;
};

const cores: Cor[] = [
    { corHexadecimal: '#BAE2FF' },
    { corHexadecimal: '#B9FFDD' },
    { corHexadecimal: '#FFE8AC' },
    { corHexadecimal: '#FFCAB9' },
    { corHexadecimal: '#F99494' },
    { corHexadecimal: '#9DD6FF' },
    { corHexadecimal: '#ECA1FF' },
    { corHexadecimal: '#DAFF8B' },
    { corHexadecimal: '#FFA285' },
    { corHexadecimal: '#CDCDCD' },
    { corHexadecimal: '#979797' },
    { corHexadecimal: '#A99A7C' },
];

const CardTarefa: React.FC<CardTarefaProps> = ({ id, titulo, conteudo, favoriteTask, color, updated_at, onClick }) => {
    const [favoriteCard, setFavoriteCard] = useState<boolean>(false);
    const [tirarDosFavoritos, setTirarDosFavoritos] = useState<boolean>(true);

    const [title, setTitle] = useState<string>(titulo);
    const [content, setContent] = useState<string>(conteudo);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [toggleColor, setToggleColor] = useState<boolean>(false);

    const [corDoCard, setCorDoCard] = useState<string>('');

    const handleEditTask = (): void => {
        setIsEdit(!isEdit);
    };

    const editandoTitulo = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };

    const editandoConteudo = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setContent(e.target.value);
    };

    const togglefavoriteTrue = (): void => {
        setFavoriteCard((prev) => !prev);
        setarComoFavorito(id, !favoriteCard);
    };

    const togglefavoriteFalse = (): void => {
        setTirarDosFavoritos((prev) => !prev);
        setarComoFavorito(id, !tirarDosFavoritos);
    };

    async function setarComoFavorito(id: string, novoCardfavorito: boolean): Promise<void> {
        try {
            const favorite = novoCardfavorito;

            console.log(id);

            await API_URL.put(`/tasks/${id}`, { favorite });

            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error('Ocorreu algum erro.', { theme: 'colored' });
        }
    }

    async function atualizarTitleOuConteudo(id: string, tituloNovo?: string, conteudoNovo?: string, corNova?: string): Promise<void> {
        try {
            const title = tituloNovo;
            const content = conteudoNovo;
            const color = corNova;

            await API_URL.put(`/tasks/${id}`, { title, content, color });
        } catch (error) {
            console.log(error);
            toast.error('Ocorreu algum erro.', { theme: 'colored' });
        }
    }

    const handleSave = (): void => {
        atualizarTitleOuConteudo(id, title, content);
        toast.success('Tarefa atualizada', { theme: 'colored' });
        setIsEdit(false);
    };

    const trocarCor = (): void => {
        setToggleColor(!toggleColor);
    };

    const handleColor = (cor: string) => {
        setCorDoCard(cor);

        const corRecebida = cor;

        atualizarTitleOuConteudo(id, title, content, corRecebida);
        toast.info('Cor da tarefa atualizada.', { theme: 'colored' });
        setToggleColor(false);
    };

    return (
        <Container $backgroundColor={corDoCard || color} $isFavorite={favoriteTask}>
            <Titulo $borderColor={color}>
                <p>{title}</p>
                {favoriteTask ? <IconStars active={favoriteTask} onClick={togglefavoriteFalse} /> : <IconStars active={favoriteTask} onClick={togglefavoriteTrue} />}
            </Titulo>
            <Conteudo>
                <p>{content}</p>
            </Conteudo>
            <Rodape>
                <div>
                    <IconEdit active={isEdit} onClick={handleEditTask} />

                    <TrocarDeCor>
                        <IconColor active={toggleColor} onClick={trocarCor} />
                        {toggleColor && (
                            <CoresDoCard>
                                {cores.map((cor, index) => (
                                    <CircleColor
                                        key={index}
                                        $backgroundColor={cor.corHexadecimal}
                                        onClick={() => {
                                            handleColor(cor.corHexadecimal);
                                        }}
                                    ></CircleColor>
                                ))}
                            </CoresDoCard>
                        )}
                    </TrocarDeCor>
                </div>

                <div>
                    <IconClose onClick={onClick} />
                </div>
            </Rodape>
            <DataDeCriacao>
                <small>Atualizado em {convertData(updated_at)}</small>
            </DataDeCriacao>
            {isEdit && (
                <BoxEdit>
                    <BoxContent>
                        <TitlePoup>
                            <h3>Editar Tarefa </h3>

                            <IconClose onClick={() => setIsEdit(false)} />
                        </TitlePoup>
                        <Input type="text" value={title} onChange={editandoTitulo} />
                        <Textarea value={content} onChange={editandoConteudo} rows={5} />
                        <Button onClick={handleSave}>Salvar</Button>
                    </BoxContent>
                </BoxEdit>
            )}
        </Container>
    );
};

export default CardTarefa;
