import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [tone, setTone] = useState('neutral');
  const [length, setLength] = useState('medium');
  const [loading, setLoading] = useState(false); // For showing a loading state
  const [error, setError] = useState(''); // For error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Backend URL
    const backendUrl = "https://prompt-optimizer-backend.onrender.com/api/generate";
  
    // Reset states before making a new request
    setResponse('');
    setError('');
    setLoading(true);
  
    try {
      // Fetch response from the backend
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,  // The text prompt entered by the user
          tone,    // The selected tone (e.g., neutral, formal)
          length,  // The selected length (e.g., short, medium)
        }),
      });
  
      console.log("Raw response:", res);
  
      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("Parsed response:", data);
  
      // Update state with response or handle errors
      if (data.response) {
        setResponse(data.response);
      } else {
        setError(data.error || "Unexpected response from the backend");
      }
    } catch (err) {
      // Handle fetch errors
      console.error("API call error:", err);
      setError("An error occurred while processing your request. Please try again.");
    } finally {
      // Stop loading indicator
      setLoading(false);
    }
  };
  
  
  
  return (
    <div>
      <h1>Prompt Optimizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
          rows="4"
          cols="50"
        />
        <div>
          <label>
            Tone:
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
              <option value="neutral">Neutral</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Length:
            <select value={length} onChange={(e) => setLength(e.target.value)}>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      <div>
        <h2>Response:</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {response && <p>{response}</p>}
      </div>
    </div>
  );
}

export default App;
