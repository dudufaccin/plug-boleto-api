import React, { useState } from 'react';
import Navbar from '../../components/Navbar/index';
import classes from './style.module.css';
import CardAPI from '../../components/CardAPIS/index';
import ChartComponent from '../../components/ChartComponent';

const Index = () => {
    const [escuro, setEscuro] = useState(false);

    // Alterna o tema entre claro e escuro
    function handleClickTema() {
        setEscuro((prevState) => !prevState);
    }

    // Estilo baseado no tema atual
    const temaEstilos = {
        backgroundColor: escuro ? '#1B213B' : 'white',
        color: escuro ? '#FFF' : '#000',
    };

    const apis = [
        { name: 'Banco do Brasil v2', color: '#F7DE13' },
        { name: 'Itaú v2', color: '#F76A00' },
        { name: 'Itaú Francesa', color: '#F76A00' },
        { name: 'Sicoob v2', color: '#00333B' },
        { name: 'Sicoob v3', color: '#00333B' },
        { name: 'Sicredi v2', color: '#3D9C0F' },
        { name: 'Sicredi v3', color: '#3D9C0F' },
        { name: 'Caixa', color: '#175B97' },
        { name: 'Santander', color: '#F60000' },
        { name: 'Banrisul', color: '#020050' },
        { name: 'Inter', color: '#F78300' },
    ];

    return (
        <div style={temaEstilos}>
            {/* Passa `escuro` e `handleClickTema` como props */}
            <Navbar escuro={escuro} onClick={handleClickTema} />
            <section className={classes.container}>
                <div className={classes.div_apis}>
                    <div className={classes.div_apis}>
                        {apis.map((api, index) => (
                            <CardAPI key={index} title={api.name} background={api.color} />
                        ))}
                    </div>
                </div>
                <div className={classes.conteudo_grafico}>
                    <ChartComponent />
                </div>
            </section>
        </div>
    );
};

export default Index;
