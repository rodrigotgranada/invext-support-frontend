import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SupportRequestForm from '../components/SupportRequestForm';

test('renders SupportRequestForm and submits', async () => {
    render(<SupportRequestForm />);

    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Descrição do Problema/i), { target: { value: 'Meu cartão não funciona' } });

    fireEvent.click(screen.getByText(/Enviar Solicitação/i));
    const responseMessage = await screen.getByTestId("button")
    expect(responseMessage).toBeInTheDocument()
});
