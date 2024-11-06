import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ApiContext } from '../../context/apiContext';

export const options = {
    title: 'Online x Offline',
    titleTextStyle: {
        color: '#eee',
        fontSize: 18,
    },
    backgroundColor: 'transparent',
    colors: ['#ADFF2F', '#b0120a'],
    curveType: 'function',
    legend: { position: 'left' },
    hAxis: {
        textStyle: {
            color: '#eee',
            fontSize: 14,
        },
    },
    vAxis: {
        title: 'Valores',
        titleTextStyle: {
            color: '#111',
            fontSize: 18,
            bold: true,
        },
        textStyle: {
            color: '#eee',
            fontSize: 14,
        },
    },
    animation: { duration: 1000, easing: 'linear', startup: true },
};

const ChartComponent = () => {
    const { selectedApi, generateChartData } = useContext(ApiContext);
    const data = generateChartData(selectedApi);

    return <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />;
};

export default ChartComponent;
