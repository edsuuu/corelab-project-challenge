import React from 'react';
import styled from 'styled-components';

interface IEdit {
    active: boolean;
    onClick: () => void;
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

const IconEdit: React.FC<IEdit> = ({ active, onClick }) => {
    return (
        <Custom>
            <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                {active === true ? <circle cx={15.0002} cy={15} r={14.4504} fill="#FFE3B3" /> : ''}
                <path
                    d="M16.945 12.167l.887.887-8.575 8.557h-.87v-.869l8.558-8.575zm3.4-5.667a.945.945 0 00-.662.274l-1.728 1.728 3.542 3.542 1.728-1.728c.368-.369.368-.983 0-1.332l-2.21-2.21a.927.927 0 00-.67-.274zm-3.4 3.013L6.499 19.958V23.5h3.542l10.445-10.446-3.541-3.541z"
                    fill="#51646E"
                />
            </svg>
        </Custom>
    );
};

export default IconEdit;
