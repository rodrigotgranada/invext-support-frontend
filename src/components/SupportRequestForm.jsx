import React, { useState } from 'react';
import { submitSupportRequest } from '../api/supportApi';

const SupportRequestForm = () => {
    const [type, setType] = useState('Cartões');
    const [customerName, setCustomerName] = useState('');
    const [customerMessage, setCustomerMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await submitSupportRequest({ type, customerName, customerMessage });
        const obj = JSON.parse(response.message)
        setResponseMessage(obj);
    };

    return (
        <div>
            <h2>Solicitação de Suporte</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tipo">Tipo de Problema:</label>
                    <select id="tipo"
                        name="tipo" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Cartões">Problemas com cartão</option>
                        <option value="Empréstimos">Contratação de Empréstimo</option>
                        <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="problemDescription">Descrição do Problema:</label>
                    <textarea
                        id="problemDescription"
                        name="problemDescription"
                        value={customerMessage}
                        onChange={(e) => setCustomerMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" data-testid="button">Enviar Solicitação</button>
            </form>

            {responseMessage && <div className={`message-div ${responseMessage?.status === "Ok" ? 'message-ok' : 'message-queue'}`}>

                <p>{responseMessage?.message}</p>

            </div>
            }
        </div>
    );
};

export default SupportRequestForm;
