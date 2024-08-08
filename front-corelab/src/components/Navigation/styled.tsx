import styled from 'styled-components';

export const Navbar = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    font-family: 'Inter', sans-serif;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 10px 20px;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid black;
    padding: 0 20px;

    img {
        width: 40px;
        height: 40px;
    }
`;

export const CampoPesquisa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 600px;
    input {
        width: 100%;

        padding: 5px;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
