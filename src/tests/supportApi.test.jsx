import { getAvailableAgents, getRequestQueue, submitSupportRequest } from "../api/supportApi";


// Simulação global do fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: 'Dados simulados' }), // Simula resposta JSON
    })
);

describe('Testes da API de Suporte', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Limpa as simulações após cada teste
    });

    it('submitSupportRequest deve enviar uma solicitação POST', async () => {
        const supportRequest = { assunto: 'Problema X', descricao: 'Descrição do problema' };
        await submitSupportRequest(supportRequest);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/support/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(supportRequest),
        });
    });

    it('getAvailableAgents deve buscar os agentes disponíveis', async () => {
        await getAvailableAgents();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/support/available-agents');
    });

    it('getRequestQueue deve buscar a fila de solicitações', async () => {
        await getRequestQueue();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/support/request-queue');
    });
});