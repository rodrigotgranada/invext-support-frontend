export const submitSupportRequest = async (supportRequest) => {
    const response = await fetch('http://localhost:8080/api/support/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supportRequest)
    });
    return response.json();
};

export const getAvailableAgents = async () => {
    const response = await fetch('http://localhost:8080/api/support/available-agents');
    return response.json();
};

export const getRequestQueue = async () => {
    const response = await fetch('http://localhost:8080/api/support/request-queue');
    return response.json();
};
