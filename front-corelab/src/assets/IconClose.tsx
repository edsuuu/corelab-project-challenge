import React from 'react';
import styled from 'styled-components';

export const Custom = styled.div`
    background-color: none;
    border-radius: 50%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ffb300;
    }
`;

interface IClose {
    onClick?: () => void;
}

const IconClose: React.FC<IClose> = ({ onClick }) => {
    return (
        <Custom onClick={onClick}>
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.22 1.777L11.896.453 6.65 5.701 1.4.453.078 1.777l5.247 5.248-5.247 5.247L1.4 13.596 6.65 8.348l5.247 5.248 1.324-1.324-5.248-5.247 5.248-5.248z"
                    fill="#51646E"
                />
            </svg>
        </Custom>
    );
};

export default IconClose;
