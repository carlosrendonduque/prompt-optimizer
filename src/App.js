import React, { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';
import EvaluationResult from './components/EvaluationResult';
import { AppContainer, Title } from './App.styles';
import useFetchResponse from './hooks/useFetchResponse';
import usePromptEvaluator from './hooks/usePromptEvaluator';

function App() {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('neutral');
  const [length, setLength] = useState('medium');
  const { loading: genLoading, error: genError, response, getResponse } = useFetchResponse();
  const { loading: evalLoading, error: evalError, results, evaluate } = usePromptEvaluator();

  // Handle generation
  const handleGenerate = (e) => {
    e.preventDefault();
    getResponse(prompt, tone, length);
  };

  // Handle evaluation
  const handleEvaluate = (e) => {
    e.preventDefault();
    evaluate(prompt);
  };

  return (
    <AppContainer>
      <Title>Prompt Optimizer</Title>
      {/* Form for input and buttons */}
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        tone={tone}
        setTone={setTone}
        length={length}
        setLength={setLength}
        handleGenerate={handleGenerate}
        handleEvaluate={handleEvaluate}
        loading={genLoading || evalLoading}
      />
      {/* Display generation response */}
      <Response loading={genLoading} error={genError} response={response} />
      {/* Display evaluation results */}
      <EvaluationResult results={results} error={evalError} />
    </AppContainer>
  );
}

export default App;
