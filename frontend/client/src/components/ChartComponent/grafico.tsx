const FetchData = async (selectedApi: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/requests/${selectedApi}`);
        if (!response.ok) {
            console.error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            return data.map((item: any) => ({
                createdAt: new Date(item.horario).toISOString().replace('T', '-').substring(0, 19),
                resultado: item.resultado,
                tempo_resposta: item.tempo_resposta,
            }));
        }
        return [];
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message || error);
        return [];
    }
};

export default FetchData;
