import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/index';
import classes from './style.module.css';
import CardAPI from '../../components/CardAPIS/index';
import technospeed from '../../assets/images/fundo_technsopeed.jpg';
import Home from '../../components/ChartComponent/main.tsx';
// import FetchData from './';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const Index = () => {
    const [data, setData] = useState([]);
    const [selectedBank, setSelectedBank] = useState('BBConsulta'); // Bank filter state

    // Função que simula a obtenção dos dados
    // const getData = async () => {
    // const result = await FetchData();

    // Filtra os dados com base no banco selecionado
    // const filteredData = result.filter((item) => item.name === selectedBank);

    // Convertendo 'delay' de string para número
    // const formattedData = filteredData.map((item) => ({
    //     ...item,
    //     delay: parseInt(item.delay.replace('ms', '')),
    // }));

    // Calculando a média dos delays
    // const totalDelay = formattedData.reduce((sum, item) => sum + item.delay, 0);
    // const averageDelay = totalDelay / formattedData.length;

    // Definindo um limite para considerar 'muito acima da média'

    //     setData(dataWithFlags);
    // };

    // useEffect(() => {
    //     getData();
    // }, [selectedBank]); // Recarregar os dados quando o banco selecionado mudar

    const [escuro, setEscuro] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredApis = apis.filter((api) => api.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div style={temaEstilos}>
            {/* Passa `escuro` e `handleClickTema` como props */}
            <Navbar escuro={escuro} onClick={handleClickTema} onSearching={setSearchTerm} />
            <section className={classes.container}>
                <div className={classes.div_apis}>
                    {/* Campo de entrada para o filtro de pesquisa */}

                    <div className={classes.div_apis}>
                        {filteredApis.map((api, index) => (
                            <CardAPI key={index} title={api.name} background={api.color} />
                        ))}
                    </div>
                </div>
                <div className={classes.conteudo_grafico}>
                    <Home />
                </div>
                <div className={classes.container_propaganda}>
                    <img src={technospeed} alt="" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h2 className={classes.legenda_title}>Conheça nossos produtos</h2>
                        <p className={classes.legenda_subtitle}>
                            O plugboleto é a solução perfeita para o seu negócio,descubra todo o seu poder e alavanque
                            hoje mesmo sua empresa
                        </p>
                        <a
                            className={classes.ancora_legenda}
                            href="https://www.youtube.com/watch?v=rNt51CYSlmo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Conheça o <span>Plugboleto</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
