import styled from 'styled-components';
import { RiStarSLine } from 'react-icons/ri';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    form {
        padding: 5px;
        border: 1px solid black;
        width: 700px;
        display: flex;
        flex-direction: column;
    }
`;

export const TextareaInput = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    resize: none;
    box-sizing: border-box;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
`;

export const TextInput = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 16px;
`;

export const StarIcon = styled(RiStarSLine)`
    margin-left: 8px;
    color: #000000;
    cursor: pointer;

    &:hover {
        border-radius: 20px;
        background-color: #f39c12;
    }
`;
