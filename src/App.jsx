import React from 'react';
import SupportRequestForm from './components/SupportRequestForm';
import AgentStatus from './components/AgentStatus';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <SupportRequestForm />
      {/* <AgentStatus /> */}
    </div>
  );
};

export default App;
