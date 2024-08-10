import React from 'react';
import styled from 'styled-components';

interface IconStarsProps {
    active: boolean;
    onClick: () => void;
}

export const Custom = styled.div`
    cursor: pointer;

    svg:active {
        transform: scale(0.86);
    }
`;

const IconStars: React.FC<IconStarsProps> = ({ active, onClick }) => {
    return (
        <Custom onClick={onClick}>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {active === true ? (
                    <path
                        d="M7.48 7.504l-5.154.793 4.56 3.667-1.19 5.55 4.163-3.171 5.153 3.171-1.387-5.55 3.865-3.667-5.253-.793L9.86 2.35 7.48 7.504z"
                        fill="#FFA000"
                    />
                ) : (
                    ''
                )}
                <path
                    d="M9.938 13.711L6.3 15.908l.958-4.142L4.045 8.98l4.238-.358 1.655-3.909 1.655 3.91 4.238.357-3.213 2.787.958 4.142m6.038-8.148l-6.957-.59L9.938.755 7.219 7.17l-6.957.59 5.273 4.577-1.577 6.803 5.98-3.61 5.98 3.61-1.587-6.803 5.283-4.577z"
                    fill="#455A64"
                />
            </svg>
        </Custom>
    );
};

export default IconStars;
