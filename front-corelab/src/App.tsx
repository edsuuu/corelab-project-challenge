import { GlobalStyled } from './styles/GlobalStyled';
import Navigation from './components/Navigation';
import React, { useState } from 'react';
import Home from './Pages/Home';

const App: React.FC = () => {
    const [pesquisarTask, setPesquisarTask] = useState<string>('');

    return (
        <>
            <Navigation pesquisarTask={setPesquisarTask} />
            <Home pequisar={pesquisarTask} />
            <GlobalStyled />
        </>
    );
};

export default App;
