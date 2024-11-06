import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [selectedApi, setSelectedApi] = useState(null);

    const generateChartData = (apiName) => {
        const months = ['1/2024', '2/2024', '3/2024', '4/2024'];
        const online = months.map(() => Math.floor(Math.random() * 5000 + 2000));
        const offline = months.map(() => Math.floor(Math.random() * 2000 + 1000));

        return [
            ['Month', 'Online', 'Offline'],
            ...months.map((month, index) => [month, online[index], offline[index]]),
        ];
    };
    return (
        <ApiContext.Provider value={{ selectedApi, setSelectedApi, generateChartData }}>{children}</ApiContext.Provider>
    );
};
