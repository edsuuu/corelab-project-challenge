import styled from 'styled-components';
import { RiStarSLine } from 'react-icons/ri';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    display: flex;
    justify-content: center;
    margin-top: 1rem;

    form {
        border: 2px solid #d9d9d9;
        background-color: white;
        width: 700px;
        display: flex;
        flex-direction: column;
        box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        button {
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
        }

        @media (max-width: 996px) {
            margin: 0 1rem;
            border-radius: 16px;

            button {
                border-radius: 5px 5px 14px 14px;
            }
        }
    }
`;

export const TextareaInput = styled.textarea`
    width: 100%;
    height: 100px;
    border: none;
    padding: 15px;
    font-size: 16px;
    resize: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.5px;
    &::placeholder {
        color: #50656e;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #d9d9d9;
    padding: 8px 13px 8px 8px;
    width: 100%;
    box-sizing: border-box;
`;

export const TextInput = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    &::placeholder {
        font-weight: bold;
        letter-spacing: 0.6px;
        color: #50656e;
    }
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
