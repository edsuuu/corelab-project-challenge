import { GlobalStyled } from './styles/GlobalStyled';
import Navigation from './components/Navigation';
import React, { useState } from 'react';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    const [pesquisarTask, setPesquisarTask] = useState<string>('');

    return (
        <>
            <Navigation pesquisarTask={setPesquisarTask} />
            <Home pequisar={pesquisarTask} />
            <ToastContainer autoClose={3000} className="toast-container" />
            <GlobalStyled />
        </>
    );
};

export default App;
