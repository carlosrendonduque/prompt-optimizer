import React from 'react';
import { FormContainer, Textarea, SelectContainer, Label, Select, Button } from './Form.styles';

const Form = ({
  prompt,
  setPrompt,
  tone,
  setTone,
  length,
  setLength,
  handleGenerate,
  handleEvaluate,
  loading,
}) => (
  <FormContainer>
    {/* Prompt Textarea */}
    <Textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your prompt here"
      rows="4"
    />

    {/* Tone and Length Selectors */}
    <SelectContainer>
      <Label>
        Tone:
        <Select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="neutral">Neutral</option>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </Select>
      </Label>
      <Label>
        Length:
        <Select value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </Select>
      </Label>
    </SelectContainer>

    {/* Buttons for Generate and Evaluate */}
    <div>
      <Button type="button" onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </Button>
      <Button type="button" onClick={handleEvaluate} disabled={loading} style={{ marginLeft: '1rem' }}>
        {loading ? 'Evaluating...' : 'Evaluate'}
      </Button>
    </div>
  </FormContainer>
);

export default Form;
