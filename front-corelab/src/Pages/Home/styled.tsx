import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    max-width: 1200px;
    margin: 0 auto;
`;

export const CardContainer = styled.div`
    width: 100%;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
`;
