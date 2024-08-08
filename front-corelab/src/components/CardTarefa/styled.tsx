import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    font-family: 'Inter', sans-serif;
    /* width: 400px; */

    border-radius: 15px;
    border: 1px solid black;
    background-color: #ffffff;
`;

export const Titulo = styled.div`
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`;

export const Conteudo = styled.div`
    height: 320px;
    padding: 10px 20px;
    text-align: left;
`;

export const Rodape = styled.div`
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
