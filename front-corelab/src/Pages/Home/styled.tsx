import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;

    h2 {
        margin-top: 0.5rem;
        margin-left: 1.5rem;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }
`;

export const ContentFavorites = styled.div`
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-top: 1.2rem;

    p {
        font-size: 0.96rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.5px;
        padding-left: 1.3rem;
    }
`;
