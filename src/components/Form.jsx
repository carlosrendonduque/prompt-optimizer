import React from 'react';
import { FormContainer, Textarea, SelectContainer, Label, Select, Button } from './Form.styles';

const Form = ({ prompt, setPrompt, tone, setTone, length, setLength, handleSubmit, loading }) => (
  <FormContainer onSubmit={handleSubmit}>
    <Textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your prompt here"
      rows="4"
    />
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
    <Button type="submit" disabled={loading}>
      {loading ? 'Generating...' : 'Generate'}
    </Button>
  </FormContainer>
);

export default Form;
