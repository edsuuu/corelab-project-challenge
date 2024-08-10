import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    font-family: 'Inter', sans-serif;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 5px;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 10px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    img {
        width: 40px;
        height: 40px;
    }
    p {
        font-size: 1.2rem;
        color: #455a64;
    }
    @media (max-width: 768px) {
        padding: 0;
        padding-right: 5px;
    }
`;

export const CampoPesquisa = styled.div`
    display: flex;
    align-items: center;
    max-width: 800px;
    width: 100%;
    font-family: 'Inter', sans-serif;
    border: 2px solid #d9d9d9;
    border-radius: 7px;
    padding: 0 5px;
    margin-right: 5px;
    margin-left: 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    input {
        padding-left: 10px;
        font-size: 1.05rem;
        width: 100%;
        border: none;
        outline: none;
    }
    svg {
        background-color: white;
        width: 25px;
        height: auto;
    }
`;

export const LeftContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0px;
`;

export const CLose = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
