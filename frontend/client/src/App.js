import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Detalhes from './pages/Detalhes/index';
import { ApiProvider } from './context/apiContext';

function App() {
    return (
        <ApiProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes" element={<Detalhes />} />
            </Routes>
        </ApiProvider>
    );
}

export default App;

// comentando um comentario
