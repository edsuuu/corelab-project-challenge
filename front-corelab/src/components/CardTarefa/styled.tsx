import styled from 'styled-components';
import { RiStarSLine } from 'react-icons/ri';

export const Container = styled.div<{ $backgroundColor?: string; $isFavorite?: boolean }>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    font-family: 'Inter', sans-serif;
    border-radius: 20px;
    background-color: ${(props) => props.$backgroundColor || '#FFFFFF'};
    color: ${(props) => (props.$backgroundColor === '#ffffff' ? '#464646' : '#464646')};
    box-shadow: ${(props) => (props.$isFavorite ? '2px 2px 4px rgba(0, 0, 0, 0.25)' : 'none')};
    transition: 0.3s;
    @media (max-width: 996px) {
        transition: 0.3s;

        margin: 0 1rem;
    }
`;

export const Titulo = styled.div<{ $borderColor?: string }>`
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => (props.$borderColor === '#ffffff' ? '#D9D9D9' : 'white')};
    p {
        padding: 0;
        font-weight: bold;
        font-size: 1rem;
        margin: 0;
    }
`;

export const Conteudo = styled.div`
    height: 320px;
    padding: 10px 20px;
    text-align: left;
    p {
        padding: 0px;

        font-weight: 300;
        font-size: 1rem;
    }
`;

export const Rodape = styled.div`
    padding: 10px 15px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
`;

export const DataDeCriacao = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    small {
        font-size: 0.8rem;
    }
`;

export const StarIcon = styled(RiStarSLine)`
    background-color: yellow;
`;

export const BoxEdit = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    outline: none;
    &:focus {
        border-color: #f39c12;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    outline: none;
    &:focus {
        border-color: #f39c12;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 8px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #f39c12;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: 0.2s;
    border-radius: 5px 5px 8px 8px;

    &:hover {
        background-color: #ffe3b3;
        color: #0000007c;
    }
    &:active {
        background-color: #f39c12;
        transform: scale(0.98);
    }
`;

export const TitlePoup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const CoresDoCard = styled.div`
    position: absolute;
    top: 100%;
    border: 3px solid #d9d9d9;
    border-radius: 10px;
    background-color: white;
    width: 650px;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    align-items: center;
    padding: 10px 10px;
    gap: 10px;

    @media (max-width: 996px) {
        width: 320px;
    }
    @media (max-width: 800px) {
        width: 250px;
    }

    @media (max-width: 660px) {
        width: 450px;
    }

    @media (max-width: 540px) {
        width: 350px;
    }
    @media (max-width: 432px) {
        width: 320px;
    }

    @media (max-width: 400px) {
        width: 250px;
    }
    @media (max-width: 360px) {
        width: 210px;
        padding: 5px 8px;
    }
`;

export const CircleColor = styled.div<{ $backgroundColor: string }>`
    background-color: ${(props) => props.$backgroundColor};
    border-radius: 50%;
    border: 1px solid #9c9c9ca9;
    width: 45px;
    height: 45px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const TrocarDeCor = styled.div`
    position: relative;
`;
