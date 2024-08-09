import React from 'react';
import styled from 'styled-components';

interface IIcon {
    active: boolean;
    onClick?: () => void;
}
export const Custom = styled.div`
    border-radius: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ffe3b3;
    }
`;
const IconColor: React.FC<IIcon> = ({ active, onClick }) => {
    return (
        <Custom>
            <svg width={29} height={30} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                {active === true ? <circle cx={14.4944} cy={15} r={14.4504} fill="#FFE3B3" /> : ''}
                <path
                    d="M21.496 16.547s-2 2.17-2 3.5a2 2 0 004 0c0-1.33-2-3.5-2-3.5zm-13.79-1.5l4.79-4.79 4.79 4.79m1.77-1.06l-8.94-8.94-1.41 1.41 2.38 2.38-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12z"
                    fill="#51646E"
                />
                <path d="M12.564 20.044L7.734 15h9.568l-4.738 5.044z" fill="#FFA000" />
            </svg>
        </Custom>
    );
};

export default IconColor;
