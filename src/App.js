import React, { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';
import { AppContainer, Title } from './App.styles';
import useFetchResponse from './hooks/useFetchResponse';

function App() {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('neutral');
  const [length, setLength] = useState('medium');
  const { loading, error, response, getResponse } = useFetchResponse();

  const handleSubmit = (e) => {
    e.preventDefault();
    getResponse(prompt, tone, length);
  };

  return (
    <AppContainer>
      <Title>Prompt Optimizer</Title>
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        tone={tone}
        setTone={setTone}
        length={length}
        setLength={setLength}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Response loading={loading} error={error} response={response} />
    </AppContainer>
  );
}

export default App;
