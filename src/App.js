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
    const backendUrl = "https://prompt-optimizer-backend.onrender.com/api/generate";
  
    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tone, length }),
      });
  
      console.log("Raw response:", res);
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      setResponse(data.response || "No response received");
    } catch (err) {
      console.error("API call error:", err.message);
      setError("API call failed: " + err.message);
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
