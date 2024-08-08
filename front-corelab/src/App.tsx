import { GlobalStyled } from './styles/GlobalStyled';
import Navigation from './components/Navigation';
import React from 'react';

const App: React.FC = () => {
    return (
        <>
            <Navigation />
            <GlobalStyled />
        </>
    );
};

export default App;
