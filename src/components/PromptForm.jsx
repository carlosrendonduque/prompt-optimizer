import React from 'react';
import { FormContainer, Textarea, ButtonGroup, Button } from './Form.styles';

const PromptForm = ({
  prompt,
  setPrompt,
  handleEvaluate,
  handleGenerate,
  loading,
  evaluationMode,
}) => (
  <FormContainer>
    <Textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your prompt here"
      rows="4"
    />
    <ButtonGroup>
      <Button type="button" onClick={handleEvaluate} disabled={loading}>
        {evaluationMode ? 'Re-Evaluate Prompt' : 'Evaluate Prompt'}
      </Button>
      <Button type="button" onClick={handleGenerate} disabled={loading}>
        Generate Response
      </Button>
    </ButtonGroup>
  </FormContainer>
);

export default PromptForm;
