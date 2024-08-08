import { GlobalStyled } from './styles/GlobalStyled';
import Navigation from './components/Navigation';
import React from 'react';
import Home from './Pages/Home';

const App: React.FC = () => {
    return (
        <>
            <Navigation />
            <Home />
            <GlobalStyled />
        </>
    );
};

export default App;
