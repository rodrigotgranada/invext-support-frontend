import React, { useEffect, useState } from 'react';
import { getAvailableAgents, getRequestQueue } from '../api/supportApi';

const AgentStatus = () => {
    const [availableAgents, setAvailableAgents] = useState([]);
    const [requestQueue, setRequestQueue] = useState([]);

    useEffect(() => {
        const fetchStatus = async () => {
            const agents = await getAvailableAgents();
            const queue = await getRequestQueue();
            setAvailableAgents(agents);
            setRequestQueue(queue);
        };
        fetchStatus();
    }, []);

    return (
        <div>
            <h2>Status dos Agentes</h2>
            <h3>Agentes Disponíveis</h3>
            <ul>
                {availableAgents.map((agent) => (
                    <li key={agent.id}>{agent.name} ({agent.team})</li>
                ))}
            </ul>
            <h3>Fila de Solicitações</h3>
            <ul>
                {requestQueue.map((request) => (
                    <li key={request.id}>{request.customerName}: {request.customerMessage}</li>
                ))}
            </ul>
        </div>
    );
};

export default AgentStatus;
